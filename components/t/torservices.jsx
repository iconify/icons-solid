import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mu5fntbqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.985 24a14.985 14.985 0 1 0-4.39 10.596");
}

.qkp3zubwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 39.203A21.5 21.5 0 1 0 24 2.5m-6.06.866A21.512 21.512 0 0 0 5.589 35.109");
}

.rbo38fmwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.53 24A8.47 8.47 0 1 0 24 15.53");
}
</style><path class="qkp3zubwt"/><path class="mu5fntbqw"/><path class="rbo38fmwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:torservices"} {...others} />);
}

export default Component;
