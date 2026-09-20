import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_-94rbje {
  d: path("M5 2v20");
}

.clcqrbcsg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 8.5h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ctz1arb4t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 2v20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f9uxp9ptq {
  d: path("M5 4h14v9H5");
}

.g1bdqebqy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 4h14v9H5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.he6k4tqrw {
  d: path("M5 8.5h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ctz1arb4t"/><path class="g1bdqebqy"/><path class="clcqrbcsg"/><path class="a_-94rbje"/><path class="f9uxp9ptq"/><path class="he6k4tqrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:country-flag-duotone-regular"} {...others} />);
}

export default Component;
