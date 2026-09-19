import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oxib5lbpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.413 24L24 31.167L11.587 24v-7.167L24 9.667l18.62 10.75V34.75L24 45.5L5.38 34.75v-7.167");
}

.qhsutvi_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.587 24L24 16.833L36.413 24v7.167L24 38.333L5.38 27.583V13.25L24 2.5l18.62 10.75v7.167");
}
</style><path class="oxib5lbpd"/><path class="qhsutvi_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:warzone-loadout-codmunity"} {...others} />);
}

export default Component;
