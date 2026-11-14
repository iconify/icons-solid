import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ub8dz9b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M12 12l-4 7h8ZM5.75 6h2.5A1.75 1.75 0 0 1 10 7.75v2.5A1.75 1.75 0 0 1 8.25 12h-2.5A1.75 1.75 0 0 1 4 10.25v-2.5A1.75 1.75 0 0 1 5.75 6M19 4.5V9m-2-2l2 2l2-2");
}
</style><path class="ub8dz9b9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:simple-machine"} {...others} />);
}

export default Component;
