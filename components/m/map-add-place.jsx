import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ek2c0uy6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.859 19.746L8.5 18.5l-6 2v-15l6-2l7 2l6-2v11.771M8.5 3.5v15m7-13v8.3M18 15v6m-3-3h6");
}
</style><path class="ek2c0uy6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-add-place"} {...others} />);
}

export default Component;
