import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6lgqu75d {
  fill: currentColor;
  d: path("M8.5 19q-1.45 0-2.475-1.025T5 15.5q0-.675.263-1.325t.762-1.15l7-7q.5-.5 1.15-.763T15.5 5q1.45 0 2.475 1.025T19 8.5q0 .675-.262 1.325t-.763 1.15l-7 7q-.5.5-1.15.763T8.5 19");
}
</style><path class="h6lgqu75d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eraser-size-3-outline-rounded"} {...others} />);
}

export default Component;
