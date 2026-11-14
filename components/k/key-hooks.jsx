import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnvb9rbzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M6 4v3.5M12 4v4.5M18 4v3.5m-15 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v7m0-3h2.5m-2.5 3h2.5m6.5-10a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v7m0-3h2.5m-2.5 3h2.5");
}
</style><path class="xnvb9rbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:key-hooks"} {...others} />);
}

export default Component;
