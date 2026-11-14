import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nb0jp-n7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.161 15.889L15.889 3.161a1.5 1.5 0 0 1 2.121 0l2.829 2.829a1.5 1.5 0 0 1 0 2.121L8.111 20.839a1.5 1.5 0 0 1-2.121 0L3.161 18.01a1.5 1.5 0 0 1 0-2.121Zm4.596-4.596l4.95 4.95m-1.414-8.486l4.95 4.95");
}
</style><path class="nb0jp-n7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:health-accident-cover"} {...others} />);
}

export default Component;
