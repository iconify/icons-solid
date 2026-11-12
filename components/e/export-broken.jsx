import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-bumj92r {
  d: path("M12 20C7.58172 20 4 16.4183 4 12M20 12C20 14.5264 18.8289 16.7793 17 18.2454");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_hpbztkk {
  stroke-linejoin: round;
  d: path("M12 14L12 4M9 7L12 4L15 7");
}
</style><g class="ipq1z-bjh"><path class="h-bumj92r"/><path class="x_hpbztkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:export-broken"} {...others} />);
}

export default Component;
