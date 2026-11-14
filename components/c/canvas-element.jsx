import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c302lzbro {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 1.75q1.837 0 2.174 1.5h11.652q.337-1.5 2.174-1.5q2.25 0 2.25 2.25q0 1.837-1.5 2.174v11.652q1.5.337 1.5 2.174q0 2.25-2.25 2.25q-1.837 0-2.174-1.5H6.174q-.337 1.5-2.174 1.5q-2.25 0-2.25-2.25q0-1.837 1.5-2.174V6.174Q1.75 5.837 1.75 4q0-2.25 2.25-2.25");
}
</style><path class="c302lzbro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:canvas-element"} {...others} />);
}

export default Component;
