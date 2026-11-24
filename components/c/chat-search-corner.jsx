import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x6gwsbbcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17H8c-.64 0-1.36.36-2 1l-2 2c-.369.369-1-.262-1-1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-3 9a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l3 3");
}
</style><path class="x6gwsbbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-search-corner"} {...others} />);
}

export default Component;
