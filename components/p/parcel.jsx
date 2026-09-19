import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bgqpep3us {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.29 14.914L24 26.328V44.5L7.29 33.086zm33.421 0L24 26.328V44.5l16.711-11.414zm0 0L24 3.5L7.29 14.914");
}

.li27a4bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.002 10.332L17.291 21.746V28.2l-3.984-2.785v-6.39L30.017 7.61");
}
</style><path class="bgqpep3us"/><path class="li27a4bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:parcel"} {...others} />);
}

export default Component;
