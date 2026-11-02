import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dufnb_byj {
  d: path("M5 3h10l4 4v14H5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8-pf9_0v {
  stroke-opacity: 0.4;
  d: path("M9 9h6v8H9Zm0 4h6");
}
</style><g class="nrj6p8qat"><path class="q8-pf9_0v"/><path class="dufnb_byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sim-card-duocolor-sharp"} {...others} />);
}

export default Component;
