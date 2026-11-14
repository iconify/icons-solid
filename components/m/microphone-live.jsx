import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6qh1k1ak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1ZM12 14v7m-3 0h6m-7.243-8.507a6 6 0 0 1 0-8.486m8.486 0a6 6 0 0 1 0 8.486M4.218 13.699a9.5 9.5 0 0 1 0-10.898m15.564 0a9.5 9.5 0 0 1 0 10.898");
}
</style><path class="o6qh1k1ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:microphone-live"} {...others} />);
}

export default Component;
