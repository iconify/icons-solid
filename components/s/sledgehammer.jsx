import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o22ny7-mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.4 3.81l7.79 7.79q1.06 1.06 0 2.12l-2.32 2.32q-1.06 1.06-2.12 0L7.96 8.25q-1.06-1.06 0-2.12l2.32-2.32q1.06-1.06 2.12 0m1.5 1.5L9.46 9.76m9.23.34l-4.45 4.44m-3.41-1.37l-7.35 7.35");
}
</style><path class="o22ny7-mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sledgehammer"} {...others} />);
}

export default Component;
