import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pt76ptv6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M9 8L11 8C11.5523 8 12 8.4477 12 9L12 16C12 16.5523 11.5523 17 11 17L9 17C8.4477 17 8 16.5523 8 16L8 9C8 8.4477 8.4477 8 9 8ZM17 5L19 5C19.5523 5 20 5.4477 20 6L20 16C20 16.5523 19.5523 17 19 17L17 17C16.4477 17 16 16.5523 16 16L16 6C16 5.4477 16.4477 5 17 5Z");
}
</style><path class="pt76ptv6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-column-big"} {...others} />);
}

export default Component;
