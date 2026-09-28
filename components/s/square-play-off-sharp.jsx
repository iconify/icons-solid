import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n_6vv0wzt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 21L3 21L3 3M7.6569 3L21 3L21 16.3431M8.9627 8.9627L8.9627 16.6987L13.7233 13.7233M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="n_6vv0wzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-play-off-sharp"} {...others} />);
}

export default Component;
