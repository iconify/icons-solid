import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqg5qwbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.098 4h5.804a1.75 1.75 0 0 1 1.743 1.592l.682 7.5A1.75 1.75 0 0 1 15.584 15H8.416a1.75 1.75 0 0 1-1.743-1.908l.682-7.5A1.75 1.75 0 0 1 9.098 4M2.5 19q2.375-2 4.75 0T12 19t4.75 0t4.75 0M7 8.5h10");
}
</style><path class="jqg5qwbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:port-hand-mark"} {...others} />);
}

export default Component;
