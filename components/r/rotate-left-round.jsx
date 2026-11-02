import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6kzt5bwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 14v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a3 3 0 0 1 3-3m4 0h3a4 4 0 0 1 4 4m-4-7l-3 3l3 3");
}
</style><path class="l6kzt5bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rotate-left-round"} {...others} />);
}

export default Component;
