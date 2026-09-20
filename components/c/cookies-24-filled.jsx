import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m26mksbvf {
  fill: currentColor;
  d: path("M12 2c.714 0 1.419.075 2.106.222a.75.75 0 0 1 .374 1.263a2.501 2.501 0 0 0 1.206 4.201a.75.75 0 0 1 .577.811a2.5 2.5 0 0 0 4.36 1.908a.75.75 0 0 1 1.307.409Q22 11.4 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-7-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="m26mksbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cookies-24-filled"} {...others} />);
}

export default Component;
