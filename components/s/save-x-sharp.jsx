import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s4z7r2b9p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L17 3L21 7L21 21L3 21L3 3ZM7 3L7 7L13 7L13 3M8.7071 10.7071L15.2929 17.2929M15.2929 10.7071L8.7071 17.2929");
}
</style><path class="s4z7r2b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:save-x-sharp"} {...others} />);
}

export default Component;
