import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap1hnsbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6c.613-1.226 1.387-2 2-2h10c.613 0 1.387.774 2 2l1 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8zM4 8h16m-10 4l4 4m0-4l-4 4");
}
</style><path class="ap1hnsbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:package-close"} {...others} />);
}

export default Component;
