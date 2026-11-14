import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ix9htdcxp {
  d: path("M13.9 15.5H6V11h8.5v2.9m4.75.35a2.5 2.5 0 1 1-2.5 2.5m.75 1.75L15 21");
}

.qvzeih-fx {
  d: path("M13.1 19H2.5V2.5H18v8.9M2.5 7.5H18M6 5h.01M9.5 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qvzeih-fx"/><path class="ix9htdcxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:appliance-maintenance"} {...others} />);
}

export default Component;
