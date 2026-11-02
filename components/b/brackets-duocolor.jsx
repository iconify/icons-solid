import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nq8470bsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2M17 7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2");
}
</style><path class="nq8470bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brackets-duocolor"} {...others} />);
}

export default Component;
