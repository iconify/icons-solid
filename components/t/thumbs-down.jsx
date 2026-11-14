import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zv7nk1tgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17 13l-3.5 6.5c-1 1.5-3.5 1-3.25-1.25l.5-3.75H5.5a2 2 0 0 1-2-2.25l1.25-6.5a2 2 0 0 1 2-1.75H17Zm3-9za1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 1 20 4");
}
</style><path class="zv7nk1tgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thumbs-down"} {...others} />);
}

export default Component;
