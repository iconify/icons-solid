import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khn9nwoel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12L2 12M5 15L2 12L5 9M15 12L22 12M19 9L22 12L19 15M12 9L12 2M9 5L12 2L15 5M12 15L12 22M15 19L12 22L9 19");
}
</style><path class="khn9nwoel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:move-fill"} {...others} />);
}

export default Component;
