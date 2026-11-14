import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5dlo_egn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm1.5 3.5l-2 6l3 3V21m-3-7.5l-2 4l-2.5 3m5.5-12l4 3m0 0L19 21");
}
</style><path class="i5dlo_egn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blind"} {...others} />);
}

export default Component;
