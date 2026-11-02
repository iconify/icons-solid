import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxzraf6oz {
  d: path("M19 7a7.071 7.071 0 1 0 0 10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u3esjiziv {
  stroke-opacity: 0.4;
  d: path("M5 10h2m0 0h6m-8 4h2m0 0h6");
}
</style><g class="nrj6p8qat"><path class="u3esjiziv"/><path class="gxzraf6oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-euro-duocolor-round"} {...others} />);
}

export default Component;
