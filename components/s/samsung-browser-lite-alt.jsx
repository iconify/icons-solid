import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tj6i46bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.802 23.671c20.812 19.897-54.214.628-27.462-7.359");
}

.wgt30wbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.448 25.21a14.718 14.718 0 0 1 26.233-10.6a14.72 14.72 0 0 1 .309 17.711m-3.2 3.446a14.716 14.716 0 0 1-23.002-6.163");
}
</style><path class="wgt30wbbl"/><path class="tj6i46bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-browser-lite-alt"} {...others} />);
}

export default Component;
