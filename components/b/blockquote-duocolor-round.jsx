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

.ty9i5gufy {
  d: path("M8 6h12M8 10h12M8 14h12M8 18h8");
}
</style><g class="nrj6p8qat"><path class="srpel7lyw"/><path class="ty9i5gufy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blockquote-duocolor-round"} {...others} />);
}

export default Component;
