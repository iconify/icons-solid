import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekl-hdcsc {
  d: path("M4.75 5.5h14.5v15.75H4.75zM9 5.5V2.75h6V5.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zzm-nmnsa {
  d: path("M8 9.5h8m-8 3h5m-5.25 4h2L11 14l1.5 4l1.25-2.5h2.5");
}
</style><g class="x2cwu0gfd"><path class="ekl-hdcsc"/><path class="zzm-nmnsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:patient-chart-sharp"} {...others} />);
}

export default Component;
