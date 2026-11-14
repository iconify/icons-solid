import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gbjejjbpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14A1.5 1.5 0 0 1 20.5 6A1.5 1.5 0 0 1 19 7.5H5A1.5 1.5 0 0 1 3.5 6A1.5 1.5 0 0 1 5 4.5m0 6h14a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12A1.5 1.5 0 0 1 5 10.5m0 6h14a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18A1.5 1.5 0 0 1 5 16.5m7-14v19");
}
</style><path class="gbjejjbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:palm-leaf-manuscript"} {...others} />);
}

export default Component;
