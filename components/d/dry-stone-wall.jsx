import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dau8mkb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19v-4.5l1.5-1l3 .25V19Zm7.25 0v-5l2.25-.75l2.25 1V19ZM17 19v-5l2.5-.5l2 1V19ZM4.5 10.5v-4l2-1.5l4 .75v4.75Zm8.75 0V6L16 5l3.5 1.25v4.25Z");
}
</style><path class="dau8mkb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dry-stone-wall"} {...others} />);
}

export default Component;
