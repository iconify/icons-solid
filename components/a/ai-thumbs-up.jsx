import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_t4u4nxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 10.5zA1.75 1.75 0 0 1 7 12.25v6A1.75 1.75 0 0 1 5.25 20a1.75 1.75 0 0 1-1.75-1.75v-6a1.75 1.75 0 0 1 1.75-1.75m4.25 0l2.5-6c1.5 0 2.5 1 2 3l-.5 3h5c1.25 0 2 1 1.75 2.25l-1 5.75c-.25 1-1 1.75-2 1.75H9.5Z");
}
</style><path class="x_t4u4nxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ai-thumbs-up"} {...others} />);
}

export default Component;
