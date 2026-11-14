import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9t0l12ji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h17v11h-17Zm17 3.5h2v4h-2M7.5 9V6.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V9m-8 3v5m3-5v5m3-5v5");
}
</style><path class="k9t0l12ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:battery-pack"} {...others} />);
}

export default Component;
