import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.j5baogbem {
  d: path("M8 11h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o47um4vmm {
  d: path("M8 21V9l4 -4 4 4v12Z");
}
</style><g class="nrj6p8qat"><path class="o47um4vmm"/><path class="j5baogbem"/><path class="c4khiwgvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:crayon-outline-regular"} {...others} />);
}

export default Component;
