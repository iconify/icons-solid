import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isvgtub8p {
  d: path("M4 4v10h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xpi-ctm3k {
  d: path("m15 9 5 5 -5 5");
}
</style><g class="nrj6p8qat"><path class="isvgtub8p"/><path class="xpi-ctm3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-down-right-outline-regular"} {...others} />);
}

export default Component;
