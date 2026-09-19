import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yvs83zboj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.838 27.235c-1.123-4.19-4.767-7.022-8.862-7.324a8.16 8.16 0 0 0 2.797-8.494a8.16 8.16 0 0 0-9.925-5.787l-.032-.118l-11.77 3.154a3 3 0 0 0-2.122 3.674l7.52 28.067a3 3 0 0 0 3.675 2.121l11.77-3.154v-.003c5.252-1.45 8.362-6.864 6.95-12.136Z");
}
</style><path class="yvs83zboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:byjus-the-learning-app"} {...others} />);
}

export default Component;
