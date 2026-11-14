import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wxe6uhbmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M4.5 21.5V14a4 4 0 0 1 8 0v7.5m-4-5.5v5.5m9-18.5v18M15.25 5.25L17.5 3l2.25 2.25m-4.5 13.5L17.5 21l2.25-2.25");
}
</style><path class="wxe6uhbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ergonomics-reach"} {...others} />);
}

export default Component;
