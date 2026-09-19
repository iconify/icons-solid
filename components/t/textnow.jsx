import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oqb-2rj1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.511 20.378h8.635c0-3.206 2.623-5.83 5.83-5.83h8.049c3.206 0 5.829 2.624 5.829 5.83H42.5");
}

.u5mqrp2ht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.593 7.47H18.407C11.308 7.47 5.5 13.28 5.5 20.379c0 5.929 4.057 10.943 9.528 12.44l.381 7.711l8.318-7.244h5.866c7.099 0 12.907-5.808 12.907-12.907S36.692 7.47 29.593 7.47");
}
</style><path class="oqb-2rj1d"/><path class="u5mqrp2ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:textnow"} {...others} />);
}

export default Component;
