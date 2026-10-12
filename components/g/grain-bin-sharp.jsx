import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vuw8gdl7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 20.65v-9.9h-1.5l.47-.37l8.31-6.51l.47-.37l.47.37l8.31 6.51l.47.37h-1.5v10.5H4.25zm0-9.9h15.5M8 13.75v4.5m4-4.5v4.5m4-4.5v4.5");
}
</style><path class="vuw8gdl7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grain-bin-sharp"} {...others} />);
}

export default Component;
