import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qap61s_na {
  fill: currentColor;
  d: path("M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z");
}
</style><path class="qap61s_na"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-chevron-right"} {...others} />);
}

export default Component;
