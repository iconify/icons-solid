import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wux6ejk_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 5C20 6.6569 16.4183 8 12 8C7.5817 8 4 6.6569 4 5C4 3.3431 7.5817 2 12 2C16.4183 2 20 3.3431 20 5ZM4 5L4 19M20 5L20 19M20 19C20 20.6569 16.4183 22 12 22C7.5817 22 4 20.6569 4 19");
}
</style><path class="wux6ejk_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cylinder"} {...others} />);
}

export default Component;
