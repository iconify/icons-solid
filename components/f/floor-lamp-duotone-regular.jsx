import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dd7ic93tf {
  fill: currentColor;
  d: path("m5 10 4 -4h6l4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kvkpyc0wg {
  d: path("m5 10 4 -4h6l4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.t9ia5kx4y {
  d: path("M12 10v10");
}
</style><g class="nrj6p8qat"><path class="dd7ic93tf"/><path class="kvkpyc0wg"/><path class="t9ia5kx4y"/><path class="qw7b_6b1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:floor-lamp-duotone-regular"} {...others} />);
}

export default Component;
