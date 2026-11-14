import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.upbdwjbye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h12.75A2.625 2.625 0 0 1 21 5.625v12.75A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375V5.625A2.625 2.625 0 0 1 5.625 3M12 3v18m-9-9h18M3 6h9m0 12h9");
}
</style><path class="upbdwjbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tatami-mats-grid"} {...others} />);
}

export default Component;
