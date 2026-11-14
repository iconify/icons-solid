import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4nk-sxxv {
  d: path("M5.5 14L8 12.5l2.5 1.5l2.5-1.5l2.5 1.5l2.5-1.5");
}

.rm49aj31c {
  d: path("M5.5 8h13l-1 12.5h-11ZM9 8V6a3 3 0 0 1 6 0v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rm49aj31c"/><path class="k4nk-sxxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:takeaway-bag"} {...others} />);
}

export default Component;
