import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrarbm99h {
  d: path("M2.75 2.75h18.5v18.5H2.75zm0 4.5h18.5m-15 5h5m-5 5h5");
}

.t_phrlb_q {
  d: path("m14.5 12l1.25 1.25l2.75-3m-4 7.25l1.25 1.25l2.75-3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qrarbm99h"/><path class="t_phrlb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:attendance-sharp"} {...others} />);
}

export default Component;
