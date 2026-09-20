import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3b6j7bvq {
  d: path("M20 10c2 0 2 -4 -1 -4");
}

.vt8fxebuz {
  d: path("M4 10h16l-6 6h-4Z");
}
</style><g class="nrj6p8qat"><path class="vt8fxebuz"/><path class="q3b6j7bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:wok-outline-regular"} {...others} />);
}

export default Component;
