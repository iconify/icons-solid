import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1wvs0nmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 3.5l6.5 6.5h-3.25v11h-6.5V10H3.5Zm9-1Q19 5 21.5 5Q19 5 19 7.5Q19 5 16.5 5Q19 5 19 2.5Z");
}
</style><path class="i1wvs0nmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:buff"} {...others} />);
}

export default Component;
