import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.buri0ac3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 6v12c0 .9-1.1 1.35-1.7.7l-5.6-6a1 1 0 0 1 0-1.4l5.6-6c.6-.65 1.7-.2 1.7.7");
}
</style><path class="buri0ac3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:caret-left"} {...others} />);
}

export default Component;
