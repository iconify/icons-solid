import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ovqkvccsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V3H12v18.5m-9.5 0h19m-6-11.5a2.5 2.5 0 0 1 5 0M12 10h9.5M18 5.5V4m-2.25 2.25L15 5m5.25 1.25L21 5M9.5 13h.01");
}
</style><path class="ovqkvccsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:day-use-room"} {...others} />);
}

export default Component;
