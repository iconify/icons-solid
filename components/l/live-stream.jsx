import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.extzuzbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-1.785 4.213a5.5 5.5 0 0 1 0-8.426m7.07 0a5.5 5.5 0 0 1 0 8.426m-9.899 2.151a9 9 0 0 1 0-12.728m12.728 0a9 9 0 0 1 0 12.728");
}
</style><path class="extzuzbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:live-stream"} {...others} />);
}

export default Component;
