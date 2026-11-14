import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwi7jjbqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h5v5.5l6 1.5a2.5 2.5 0 0 1 2 2.5v1h-13ZM3 15.5V19a2.5 2.5 0 0 0 2.5 2.5h13A2.5 2.5 0 0 0 21 19v-3.5m-13.5-2v4.75M16 13.5v4.75m-10.25 0h12.5");
}
</style><path class="fwi7jjbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skate-guard"} {...others} />);
}

export default Component;
