import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmfamebto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M6.077 3.865L7 4.25a1.354 1.354 0 0 1 0 2.5l-.923.385A1.5 1.5 0 0 1 4 5.75v-.5a1.5 1.5 0 0 1 2.077-1.385m11.846 0L17 4.25a1.354 1.354 0 0 0 0 2.5l.923.385A1.5 1.5 0 0 0 20 5.75v-.5a1.5 1.5 0 0 0-2.077-1.385M7 17.5l7.5-6m-5 8.5l7.5-6");
}
</style><path class="qmfamebto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skier-slalom"} {...others} />);
}

export default Component;
