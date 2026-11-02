import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz7l42nhx {
  stroke-opacity: 0.4;
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zwyhlrb6b {
  d: path("m9 20l3-7m-5 1a4.92 4.92 0 0 1 0-4c1.733-3.9 7.267-3.9 9 0a4.924 4.924 0 0 1-5.626 6.794");
}
</style><g class="nrj6p8qat"><path class="cz7l42nhx"/><path class="zwyhlrb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pinterest-duocolor-round"} {...others} />);
}

export default Component;
