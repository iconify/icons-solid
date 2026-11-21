import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwcyqlp6y {
  stroke-opacity: 0.4;
  d: path("M13 13V12C13 11.4477 13.4477 11 14 11H21C21.5523 11 22 11.4477 22 12V13M17.5 11V20M16 20H19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.semf6ee4g {
  d: path("M2 7V6C2 4.8954 2.8954 4 4 4H14C15.1046 4 16 4.8954 16 6V7M9 4V20M6 20H12");
}
</style><g class="nrj6p8qat"><path class="fwcyqlp6y"/><path class="semf6ee4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-size-two-tone"} {...others} />);
}

export default Component;
