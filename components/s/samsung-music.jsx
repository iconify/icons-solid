import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bvfugvi_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.559 35.481V4.88h4.358a13.32 13.32 0 0 1 13.321 13.322v5.542");
}

.e_81gsb2o {
  cx: 15.16px;
  cy: 35.481px;
  r: 8.399px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="e_81gsb2o"/><path class="bvfugvi_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-music"} {...others} />);
}

export default Component;
