import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb0o2irgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 10c-1-1.1-1-2.15 0-3.25s1-2.15 0-3.25m5.5 6.5c-1-1.1-1-2.15 0-3.25s1-2.15 0-3.25M5.25 13h13.5l-1.1 6.6a2 2 0 0 1-2 1.65h-7.3a2 2 0 0 1-2-1.65Zm3.25 3.75h7");
}
</style><path class="cb0o2irgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:aromatherapy"} {...others} />);
}

export default Component;
