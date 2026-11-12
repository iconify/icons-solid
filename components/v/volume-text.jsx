import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9r-60eeu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 10l4-4c.369-.369 1-.369 1 0v12c0 .369-.631.369-1 0l-4-4h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 9h6M6 9v6");
}
</style><path class="w9r-60eeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-text"} {...others} />);
}

export default Component;
