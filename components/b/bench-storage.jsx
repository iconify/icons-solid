import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bng-uibft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 11h12.75A2.625 2.625 0 0 1 21 13.625v1.75A2.625 2.625 0 0 1 18.375 18H5.625A2.625 2.625 0 0 1 3 15.375v-1.75A2.625 2.625 0 0 1 5.625 11M3.5 8.5l10.5-6M5.5 18v3m13-3v3");
}
</style><path class="bng-uibft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bench-storage"} {...others} />);
}

export default Component;
