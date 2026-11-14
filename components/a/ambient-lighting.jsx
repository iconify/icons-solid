import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idfhns4zn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V11l6.5-7.5H19a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2Zm3-3h12m-10-3l-1.25-2.75M12 14.5v-3.25m4 3.25l1.25-2.75");
}
</style><path class="idfhns4zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ambient-lighting"} {...others} />);
}

export default Component;
