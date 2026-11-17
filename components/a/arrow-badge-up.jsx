import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nioqqab-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 15v4c0 .369-.631.369-1 0l-5-5a1.414 1.414 0 0 0-2 0l-5 5c-.369.369-1 .369-1 0v-8l6-6a1.414 1.414 0 0 1 2 0l6 6z");
}
</style><path class="nioqqab-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-up"} {...others} />);
}

export default Component;
