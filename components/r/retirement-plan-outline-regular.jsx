import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.it6j56pks {
  d: path("M6 10V4h12v6");
}

.mp6xg7bgc {
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n8uuobb1z {
  d: path("M18 18v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojjdplbtx {
  d: path("M6 18v3");
}
</style><g class="nrj6p8qat"><path class="mp6xg7bgc"/><path class="it6j56pks"/><path class="ojjdplbtx"/><path class="n8uuobb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:retirement-plan-outline-regular"} {...others} />);
}

export default Component;
