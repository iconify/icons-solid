import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ke85xxb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11a8 8 0 1 1 16 0v8c0 .738-.631 1.369-1 1l-1-1a2.83 2.83 0 0 0-4 0a2.83 2.83 0 0 1-4 0a2.83 2.83 0 0 0-4 0l-1 1c-.369.369-1-.262-1-1zm5-1h.01M15 10h.01");
}
</style><path class="ke85xxb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ghost-round"} {...others} />);
}

export default Component;
