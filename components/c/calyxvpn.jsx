import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bu251ht_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5s-11.26 2-15.25 2v20c0 9.23 13.56 17 15.25 17s15.25-7.77 15.25-16.94v-20C35.26 6.53 24 4.5 24 4.5m6.19 21.65l-11.1 9.93l3.33-6.83h-4.5l5.62-11h-4.29l3-8.58h7.46l-3.55 6.9H32l-7 9.6Z");
}
</style><path class="bu251ht_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calyxvpn"} {...others} />);
}

export default Component;
