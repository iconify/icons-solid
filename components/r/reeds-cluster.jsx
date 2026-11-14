import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r1-f5ebeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7a1.5 1.5 0 0 1 3 0v3.5a1.5 1.5 0 0 1-3 0Zm6-2.5a1.5 1.5 0 0 1 3 0V9a1.5 1.5 0 0 1-3 0Zm6 2.5a1.5 1.5 0 0 1 3 0v3.5a1.5 1.5 0 0 1-3 0ZM6 12v4.5m6-6v6m6-4.5v4.5M3 20.25q2.25-1.875 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="r1-f5ebeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reeds-cluster"} {...others} />);
}

export default Component;
