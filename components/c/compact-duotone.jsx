import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahv7i1yqo {
  stroke-opacity: 0.4;
  d: path("M8 4L17 4C18.6569 4 20 5.3431 20 7L20 16M16 20L7 20C5.3431 20 4 18.6569 4 17L4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xpou5l41d {
  d: path("M8 10L16 10M8 14L14 14");
}
</style><g class="nrj6p8qat"><path class="ahv7i1yqo"/><path class="xpou5l41d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:compact-duotone"} {...others} />);
}

export default Component;
