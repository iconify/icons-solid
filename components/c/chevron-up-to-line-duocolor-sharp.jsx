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

.srugpnb9t {
  stroke-opacity: 0.4;
  d: path("M6 7h12");
}

.v2vk_nezw {
  d: path("m18 17l-6-6l-6 6");
}
</style><g class="nrj6p8qat"><path class="srugpnb9t"/><path class="v2vk_nezw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-up-to-line-duocolor-sharp"} {...others} />);
}

export default Component;
