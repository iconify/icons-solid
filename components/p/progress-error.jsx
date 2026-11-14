import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pw56weatq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-1 4h4m6.25-2.25l4.5 4.5m0-4.5l-4.5 4.5");
}
</style><path class="pw56weatq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:progress-error"} {...others} />);
}

export default Component;
