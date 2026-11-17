import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlpl7h1sj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a4 4 0 1 1 8 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4-4V8c0-4 6-5 7-2l5 15m-3 0h5");
}
</style><path class="tlpl7h1sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vacuum-cleaner"} {...others} />);
}

export default Component;
