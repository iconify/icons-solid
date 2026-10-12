import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hne_2ubel {
  d: path("M5.75 7h5m-5 3.5h5m-5 6l1.75-2L9 15.75l2-2.25m5.75-9V3h3v11.6a2.5 2.5 0 1 1-3 0Z");
}

.mzktlyszh {
  d: path("M2.75 2.75h10.5v18.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mzktlyszh"/><path class="hne_2ubel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:temperature-log-sharp"} {...others} />);
}

export default Component;
