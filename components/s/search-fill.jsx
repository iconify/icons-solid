import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jl1_ebcra {
  fill: currentColor;
  d: path("M10 2C14.4184 2 18 5.5816 18 10C18 14.4184 14.4184 18 10 18C5.5816 18 2 14.4184 2 10C2 5.5816 5.5816 2 10 2Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xexl16bfr {
  d: path("M15 15L21 21");
}
</style><g class="nrj6p8qat"><path class="jl1_ebcra"/><path class="xexl16bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-fill"} {...others} />);
}

export default Component;
