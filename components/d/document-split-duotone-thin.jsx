import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp9na9-yx {
  d: path("M10 3H4v16h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mr8y4c38h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 5h6v16h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ns5jj3buy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 3H4v16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vl0d0wtss {
  d: path("M14 5h6v16h-6");
}
</style><g class="hntgybcog"><path class="ns5jj3buy"/><path class="mr8y4c38h"/><path class="bp9na9-yx"/><path class="vl0d0wtss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-split-duotone-thin"} {...others} />);
}

export default Component;
