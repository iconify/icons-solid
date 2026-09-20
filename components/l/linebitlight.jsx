import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l4-t1x7do {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.48 39.46a3 3 0 0 1 3-3H24a12.39 12.39 0 0 0 0-24.78A12.39 12.39 0 0 0 11.61 24v3a3 3 0 0 1-6.08 0v-3A18.48 18.48 0 0 1 24 5.49A18.48 18.48 0 0 1 42.48 24A18.48 18.48 0 0 1 24 42.51H8.53a3 3 0 0 1-3-3ZM16.9 28.62V24a7.1 7.1 0 0 1 7.1-7.1a7.1 7.1 0 0 1 7.1 7.1a7.1 7.1 0 0 1-7.1 7.1h-4.62a2.48 2.48 0 0 1-2.48-2.46Z");
}
</style><path class="l4-t1x7do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:linebitlight"} {...others} />);
}

export default Component;
