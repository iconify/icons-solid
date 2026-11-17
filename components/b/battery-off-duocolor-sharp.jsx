import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dc4zz8uqj {
  stroke-opacity: 0.4;
  d: path("M21 10v4M2 2l20 20");
}

.l-nerf3al {
  d: path("M17 17H3V7h4m6 0h5v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dc4zz8uqj"/><path class="l-nerf3al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-off-duocolor-sharp"} {...others} />);
}

export default Component;
