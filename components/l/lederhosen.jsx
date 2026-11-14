import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qv9v1oj2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.524 11.5h8.952a1.75 1.75 0 0 1 1.734 1.509l.764 5.5A1.75 1.75 0 0 1 17.24 20.5h-2.438a1.75 1.75 0 0 1-1.676-1.247L12.75 18a.783.783 0 0 0-1.5 0l-.376 1.253A1.75 1.75 0 0 1 9.198 20.5H6.76a1.75 1.75 0 0 1-1.734-1.991l.764-5.5A1.75 1.75 0 0 1 7.524 11.5m.976 0v-8m7 8v-8M8.5 7h7");
}
</style><path class="qv9v1oj2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lederhosen"} {...others} />);
}

export default Component;
