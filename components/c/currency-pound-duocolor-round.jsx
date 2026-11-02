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

.pwrx49byc {
  d: path("M17 9a4 4 0 1 0-8 0v10m-3 0h12");
}

.xi553kbjw {
  stroke-opacity: 0.4;
  d: path("M6 14h3m0 0h4");
}
</style><g class="nrj6p8qat"><path class="xi553kbjw"/><path class="pwrx49byc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-pound-duocolor-round"} {...others} />);
}

export default Component;
