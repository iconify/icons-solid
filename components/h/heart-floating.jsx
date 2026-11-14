import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x5rtjdbbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 1 4.5 0L7 20Zm8-6a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0l-3 3Zm7-5.5a1 1 0 0 1 2 0a1 1 0 0 1 2 0l-2 2Z");
}
</style><path class="x5rtjdbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heart-floating"} {...others} />);
}

export default Component;
