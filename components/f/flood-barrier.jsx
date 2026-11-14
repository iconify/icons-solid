import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbbgdgb6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 2.5h1a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 10 19.75V4.25a1.75 1.75 0 0 1 1.75-1.75m-9.25 10q2-1.5 3.75 0t3.75 0M2.5 17q2-1.5 3.75 0T10 17m4.5 2q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="lbbgdgb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flood-barrier"} {...others} />);
}

export default Component;
