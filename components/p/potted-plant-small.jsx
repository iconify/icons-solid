import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s28kqo6oa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.5h11l-1.5 8H8Zm5.5 0V9m0 1c-3.5 0-6-2-6-5.5c3.5 0 6 2 6 5.5m0-1c3.5 0 6-2 6-5.5c-3.5 0-6 2-6 5.5");
}
</style><path class="s28kqo6oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:potted-plant-small"} {...others} />);
}

export default Component;
