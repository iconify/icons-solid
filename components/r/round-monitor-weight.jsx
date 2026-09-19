import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cy8vvwbec {
  cx: 10.5px;
  cy: 9px;
  r: 0.5px;
  fill: currentColor;
}

.dl4pz3_8y {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3");
}

.pp6vxiujp {
  cx: 12px;
  cy: 9px;
  r: 0.5px;
  fill: currentColor;
}

.vy4arzoaw {
  cx: 13.5px;
  cy: 9px;
  r: 0.5px;
  fill: currentColor;
}
</style><path class="dl4pz3_8y"/><circle class="cy8vvwbec"/><circle class="vy4arzoaw"/><circle class="pp6vxiujp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-monitor-weight"} {...others} />);
}

export default Component;
