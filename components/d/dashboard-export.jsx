import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7sx_g3df {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5m-.5 9.25H16a1.5 1.5 0 0 0-1.5 1.5V20a1.5 1.5 0 0 0 1.5 1.5h3.75a1.5 1.5 0 0 0 1.5-1.5v-1.5m-3.5-.25l3.75-3.75m-2.75 0h2.75v2.75");
}

.em-lf9bop {
  d: path("M12 21.5H2.5v-19h19v8.1m-19 .4h18.6M11 11v10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em-lf9bop"/><path class="a7sx_g3df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dashboard-export"} {...others} />);
}

export default Component;
