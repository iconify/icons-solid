import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ac4p_wikp {
  d: path("M14 9h7v5a3.5 3.5 0 0 1 -7 0Z");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tc3rjukod {
  d: path("M3 9h7v5a3.5 3.5 0 0 1 -7 0Z");
}
</style><g class="nrj6p8qat"><path class="tc3rjukod"/><path class="ac4p_wikp"/><path class="f2vh026ub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:sunglasses-outline-regular"} {...others} />);
}

export default Component;
