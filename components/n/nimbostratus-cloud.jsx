import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lay4nyu-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 14a3.5 3.5 0 0 1 0-7a3.5 3.5 0 0 1 6-1.5A3.5 3.5 0 0 1 18 7a3.5 3.5 0 0 1 0 7Zm1 3l-1 3.5m6-3.5l-1 3.5m6-3.5l-1 3.5");
}
</style><path class="lay4nyu-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nimbostratus-cloud"} {...others} />);
}

export default Component;
