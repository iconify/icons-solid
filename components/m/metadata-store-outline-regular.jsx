import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bytzq2hdx {
  d: path("M6 13h4");
}

.mdjih2src {
  d: path("M6 17h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q0ladwbck {
  d: path("M14 13h4");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.udhsi7cci {
  d: path("M14 17h4");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="vyks9vbfn"/><path class="rw6ho_bav"/><path class="bytzq2hdx"/><path class="q0ladwbck"/><path class="mdjih2src"/><path class="udhsi7cci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:metadata-store-outline-regular"} {...others} />);
}

export default Component;
