import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5cjgzbpf {
  d: path("M18.2168 18.2178L21.9994 22.0004");
}

.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m50eg6ell {
  d: path("M9.73223 9.73208L11.5 11.4998M11.5 11.4998L13.2678 13.2676M11.5 11.4998L9.73223 13.2676M11.5 11.4998L13.2678 9.73208");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="m50eg6ell"/><path class="c5cjgzbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-close-linear"} {...others} />);
}

export default Component;
