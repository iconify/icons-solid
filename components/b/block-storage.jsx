import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efi2grb1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h5a1.75 1.75 0 0 1 1.75 1.75v5A1.75 1.75 0 0 1 14.5 12h-5a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 9.5 3.5M5.25 12h5A1.75 1.75 0 0 1 12 13.75v5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 5.25 12m8.5 0h5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 12 18.75v-5A1.75 1.75 0 0 1 13.75 12");
}
</style><path class="efi2grb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:block-storage"} {...others} />);
}

export default Component;
