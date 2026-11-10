import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j6duehwzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.512 40.606c-5.336 4.238-13.895 4.452-20.362 2.306S4.706 36.775 3.53 29.002c-1.02-6.737 3.798-14.14 8.784-18.783c5.66-5.27 12.29-7.856 18.756-5.711s11.568 10.19 12.944 16.863s.675 14.33-5.502 19.235m-21.13-26.138v20.684m14.084-20.684v20.684M17.381 24.77h14.084");
}
</style><path class="j6duehwzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huazhu-club"} {...others} />);
}

export default Component;
