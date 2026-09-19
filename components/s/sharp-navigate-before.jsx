import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds85t8b9e {
  fill: currentColor;
  d: path("M15.61 7.41L14.2 6l-6 6l6 6l1.41-1.41L11.03 12z");
}
</style><path class="ds85t8b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-navigate-before"} {...others} />);
}

export default Component;
