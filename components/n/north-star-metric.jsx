import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fjg57hbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.884 5.116l.655 2.311a1.5 1.5 0 0 0 1.034 1.034l2.311.655a.919.919 0 0 1 0 1.768l-2.311.655a1.5 1.5 0 0 0-1.034 1.034l-.655 2.311a.919.919 0 0 1-1.768 0l-.655-2.311a1.5 1.5 0 0 0-1.034-1.034l-2.311-.655a.919.919 0 0 1 0-1.768l2.311-.655a1.5 1.5 0 0 0 1.034-1.034l.655-2.311a.919.919 0 0 1 1.768 0M2.5 20.5h19");
}
</style><path class="fjg57hbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:north-star-metric"} {...others} />);
}

export default Component;
