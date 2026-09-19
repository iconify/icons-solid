import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ftrtg_b4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.944 34.176h-22a8.12 8.12 0 1 1 5.741-13.861");
}

.ivnu1ra2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.112 37.019H20.944c-6.055 0-10.962-4.908-10.962-10.963s4.907-10.962 10.962-10.962c1.486 0 2.903.296 4.196.832");
}

.s-vb40stl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.515 39.86H20.944c-7.624 0-13.804-6.18-13.804-13.804s6.18-13.804 13.804-13.804");
}
</style><circle class="cpk0fnbgt"/><path class="ftrtg_b4w"/><path class="ivnu1ra2k"/><path class="s-vb40stl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bittorrent"} {...others} />);
}

export default Component;
