import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxt_y765a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.261 3h5.478a1.75 1.75 0 0 1 1.66 1.197l.833 2.5A1.75 1.75 0 0 1 15.572 9H8.428a1.75 1.75 0 0 1-1.66-2.303l.833-2.5A1.75 1.75 0 0 1 9.261 3M12 9v12m-4 0h8");
}
</style><path class="bxt_y765a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:floor-lamp"} {...others} />);
}

export default Component;
