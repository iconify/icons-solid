import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db6l7z25h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4v6m-3 7l3-7l3 7M8 9l5 3m0 0l6 9");
}
</style><path class="db6l7z25h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:person-cane-round"} {...others} />);
}

export default Component;
