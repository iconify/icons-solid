import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.efl66ebig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.21 26.77L10.74 43.5h26.22L24.908 26.749");
}

.g8hsl5phr {
  cx: 24px;
  cy: 21.931px;
  r: 4.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.siz3z5r5d {
  cx: 24px;
  cy: 22.103px;
  r: 8.432px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.timfdq6ad {
  cx: 24px;
  cy: 21.931px;
  r: 17.433px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="timfdq6ad"/><circle class="g8hsl5phr"/><path class="efl66ebig"/><circle class="siz3z5r5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:camo"} {...others} />);
}

export default Component;
