import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gaw7ks2fy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.25 13.75h-20.5L24 24l10.25-10.25zm-20.5 20.5h20.5L24 24L13.75 34.25zm20.5-20.5v20.5L44.5 24L34.25 13.75zm-20.5 20.5v-20.5L3.5 24l10.25 10.25zm7.1 3v2.675a1.325 1.325 0 1 0 2.65 0V37.25m1.5 0v4m2.15 0l-1.645-2l1.645-1.986m-1.647 1.986H25");
}
</style><path class="gaw7ks2fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hsbc-uk"} {...others} />);
}

export default Component;
