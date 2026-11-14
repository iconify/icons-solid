import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifqmm3bsa {
  d: path("M3 2.5h18v10H3Zm0 12.75h18v6H3Z");
}

.qw09ylq4y {
  d: path("M9.5 5.25L7 7.5l2.5 2.25m5-4.5L17 7.5l-2.5 2.25m-8 8.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ifqmm3bsa"/><path class="qw09ylq4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:server-code"} {...others} />);
}

export default Component;
