import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhq8fvk0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.25h15.75V16.5h-4.5v-7H7.5v2H3.75V4.25zm.5 7.25V16m13-9.25v7.5m-15.75 4.5h18.5v2.5H2.75z");
}
</style><path class="nhq8fvk0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sewing-machine-sharp"} {...others} />);
}

export default Component;
