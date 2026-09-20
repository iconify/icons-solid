import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iopx9qkhf {
  d: path("M13 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.khp0b8bxr {
  d: path("M10.5 13h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ou2rz6bri {
  d: path("m2 9 2 2");
}

.vo_28p0qr {
  d: path("m22 9 -2 2");
}

.zwwtt2bhd {
  d: path("M2 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}
</style><g class="nrj6p8qat"><path class="zwwtt2bhd"/><path class="iopx9qkhf"/><path class="khp0b8bxr"/><path class="ou2rz6bri"/><path class="vo_28p0qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:eyeglasses-outline-regular"} {...others} />);
}

export default Component;
