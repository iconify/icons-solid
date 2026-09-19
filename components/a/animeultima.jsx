import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qyjyr65jz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.938 43.5l14.343-39h7.438l14.344 39h-8.5l-2.657-7.905H17.094L14.438 43.5Z");
}

.ubgz96bes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.375 18.167v10.04l7.25-5.02Z");
}
</style><path class="ubgz96bes"/><path class="qyjyr65jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:animeultima"} {...others} />);
}

export default Component;
