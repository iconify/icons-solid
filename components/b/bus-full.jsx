import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2lyt7ypn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 17.5H3v-15h12v9.8m-9 5.2V20M3 9.5h12m-.75 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25-2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-5.25 7q0-1.75 2.5-1.75t2.5 1.75M19.5 18q2.25 0 2.25 3");
}
</style><path class="z2lyt7ypn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bus-full"} {...others} />);
}

export default Component;
