import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6lym5b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.621 4.379za1.75 1.75 0 0 1 0 2.475l-1.767 1.767a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l1.767-1.767a1.75 1.75 0 0 1 2.475 0m-15.242 0za1.75 1.75 0 0 1 2.475 0l1.767 1.767a1.75 1.75 0 0 1 0 2.475a1.75 1.75 0 0 1-2.475 0L4.379 6.854a1.75 1.75 0 0 1 0-2.475M15.5 8.5l-11 11m4-11l10 10");
}
</style><path class="g6lym5b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cotton-swab"} {...others} />);
}

export default Component;
