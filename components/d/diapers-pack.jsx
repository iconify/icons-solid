import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7_9xbbax {
  d: path("M3 5.5h18v15H3Zm12 0V3h3.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4dm87blb {
  d: path("M7.5 9.5h9V12q-2.5.5-3.25 4h-2.5Q10 12.5 7.5 12Z");
}
</style><g class="ulnmmdpxh"><path class="s7_9xbbax"/><path class="v4dm87blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:diapers-pack"} {...others} />);
}

export default Component;
