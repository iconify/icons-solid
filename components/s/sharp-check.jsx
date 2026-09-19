import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t3us7igxz {
  fill: currentColor;
  d: path("M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z");
}
</style><path class="t3us7igxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-check"} {...others} />);
}

export default Component;
