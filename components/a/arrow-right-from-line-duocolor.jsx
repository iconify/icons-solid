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

.srpel7lyw {
  stroke-opacity: 0.4;
  d: path("M4 6v12");
}

.xw8_zjbhs {
  d: path("m16 16l4-4l-4-4m4 4H8");
}
</style><g class="nrj6p8qat"><path class="srpel7lyw"/><path class="xw8_zjbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-right-from-line-duocolor"} {...others} />);
}

export default Component;
