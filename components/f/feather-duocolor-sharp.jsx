import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkoja3b2g {
  d: path("M13 5a4.243 4.243 0 0 1 6 6l-6 6H7v-6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.odh-gj0dg {
  stroke-opacity: 0.4;
  d: path("M4 20L16 8m1 5h-6");
}
</style><g class="nrj6p8qat"><path class="odh-gj0dg"/><path class="nkoja3b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:feather-duocolor-sharp"} {...others} />);
}

export default Component;
