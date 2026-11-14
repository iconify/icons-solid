import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rso8mzbms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3zA4.25 4.25 0 0 1 11 7.25v9.5A4.25 4.25 0 0 1 6.75 21a4.25 4.25 0 0 1-4.25-4.25v-9.5A4.25 4.25 0 0 1 6.75 3m8.75 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M5.5 18H8m7.375-7.047a5.25 5.25 0 0 1 5.25 0M14 8.572a8 8 0 0 1 8 0");
}
</style><path class="rso8mzbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nfc-tag-sign"} {...others} />);
}

export default Component;
