import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cow3o_29e {
  d: path("m15 9.5 2.5 2.5 -2.5 2.5");
}

.ibqum-bte {
  d: path("M9 9.5 6.5 12 9 14.5");
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="nrj6p8qat"><path class="n48w5yb-p"/><path class="r7xk8o29f"/><path class="ibqum-bte"/><path class="cow3o_29e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:table-columns-split-outline-regular"} {...others} />);
}

export default Component;
