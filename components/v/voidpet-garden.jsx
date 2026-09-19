import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.biy_ji_lg {
  cx: 29.505px;
  cy: 18.017px;
  r: 3.668px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.e2f-7db_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.077 10.134c-5.284 4.104-3.343 11.151-4.634 13.24c-1.3 2.098-8.05 8.162-12.943 2.303c.724 11.355 12.6 17.224 21.885 12.655c9.285-4.55 5.162-12.72 8.078-14.243c2.925-1.513 4.865-2.256 6.778-4.318c1.903-2.042 3.955-10.315-.01-10.315s-13.871-3.436-19.154.678");
}

.sm6rfywoo {
  cx: 28.755px;
  cy: 18.767px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="e2f-7db_z"/><circle class="biy_ji_lg"/><circle class="sm6rfywoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:voidpet-garden"} {...others} />);
}

export default Component;
