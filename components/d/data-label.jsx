import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eih1v9rnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.664 11.558l7.274-7.274a2.63 2.63 0 0 1 1.856-.769h4.066a2.625 2.625 0 0 1 2.625 2.625v4.066a2.63 2.63 0 0 1-.769 1.856l-7.274 7.274a2.625 2.625 0 0 1-3.712 0L4.664 15.27a2.625 2.625 0 0 1 0-3.712m3.447 2.21l4.95-4.95m-2.829 7.071l3.182-3.182");
}
</style><path class="eih1v9rnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:data-label"} {...others} />);
}

export default Component;
