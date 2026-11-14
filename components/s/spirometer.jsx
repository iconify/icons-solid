import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tgjd8ebpj {
  d: path("M13 5.5h5.5V11H13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6frtlvmc {
  d: path("M13.75 10c.75-3 2.25-3.25 4 0M3.5 15.5h5M7 14l1.5 1.5L7 17");
}

.xl35qgblg {
  d: path("M11 3h9.5v18H11ZM2.5 8H11v4H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="xl35qgblg"/><path class="tgjd8ebpj"/><path class="v6frtlvmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spirometer"} {...others} />);
}

export default Component;
