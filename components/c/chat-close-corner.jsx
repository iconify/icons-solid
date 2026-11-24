import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ze6dm7boc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17H8c-.64 0-1.36.36-2 1l-2 2c-.369.369-1-.262-1-1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4m-7 5l6 6m0-6l-6 6");
}
</style><path class="ze6dm7boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-close-corner"} {...others} />);
}

export default Component;
