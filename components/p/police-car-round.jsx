import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wfe64_byo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 8V6h2v2m-2 0h2M7 5h1m8 0h1M8 15h.01M16 15h.01M12 18H6a2 2 0 0 1-2-2v-4l1-2c.613-1.226 1.774-2 3-2h8c1.226 0 2.387.774 3 2l1 2v4a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 12h18");
}
</style><path class="wfe64_byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:police-car-round"} {...others} />);
}

export default Component;
