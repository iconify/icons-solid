import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4hk_5bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 11.25h16.5v10H3.75zm0 5h16.5m-8.25-5v10m1.57-17.9l2.16-.45l1.17-.25l.25 1.17l.45 2.16l.25 1.17l-1.17.25l-2.16.45l-1.17.25l-.25-1.17l-.45-2.16l-.25-1.17z");
}
</style><path class="w4hk_5bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ice-tray-sharp"} {...others} />);
}

export default Component;
