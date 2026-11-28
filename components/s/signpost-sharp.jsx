import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ykhfdoojb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4L18.8238 4L21.9994 6.5L18.8238 9L6 9ZM18 13L18 18L5.1762 18L2.0006 15.5L5.1762 13ZM12 1L12 4M12 9L12 13M12 18L12 22M7 22L17 22");
}
</style><path class="ykhfdoojb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signpost-sharp"} {...others} />);
}

export default Component;
