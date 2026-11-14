import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e597opamd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 16.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12.25 12h2.5c1.25-2 1-4.25-.5-6c.75-.75.75-1.5.75-2a1.5 1.5 0 0 0-3 0c0 .5 0 1.25.75 2c-1.5 1.75-1.75 4-.5 6m6.25 4H21c1.25-2 1-4.25-.5-6c.75-.75.75-1.5.75-2a1.5 1.5 0 0 0-3 0c0 .5 0 1.25.75 2c-1.5 1.75-1.75 4-.5 6");
}
</style><path class="e597opamd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bowling-ball-pins"} {...others} />);
}

export default Component;
