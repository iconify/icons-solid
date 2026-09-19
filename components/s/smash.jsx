import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hfxpj4baq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.955 6.7C5.92-1.301-2.006 39.293 13.817 34.03l19.304-7.132");
}

.mlgoyvtjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.948 21.068l18.448-6.412c17-6.038 8.89 34.539-17.557 26.676");
}
</style><path class="hfxpj4baq"/><path class="mlgoyvtjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smash"} {...others} />);
}

export default Component;
