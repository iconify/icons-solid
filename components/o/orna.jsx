import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eoma9u2lw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.64 40.488a16.5 16.5 0 0 0 15.848-15.846m-32.976 0A16.5 16.5 0 0 0 23.36 40.488m-.002-32.976A16.5 16.5 0 0 0 7.512 23.358m32.976 0A16.5 16.5 0 0 0 24.642 7.512");
}

.jhknwn9kx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.823 16.725L24 2.5l-1.823 14.224m0 14.551L24 45.5l1.823-14.225m-9.098-9.098L2.5 24l14.225 1.823m14.551 0L45.5 24l-14.225-1.823");
}

.kguly92mf {
  cx: 24px;
  cy: 24px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wjno9kgsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.303 29.303L38.5 38.5m-29-29l9.198 9.198m0 10.604L9.5 38.5m29-29l-9.197 9.197");
}
</style><path class="eoma9u2lw"/><path class="jhknwn9kx"/><circle class="kguly92mf"/><path class="wjno9kgsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:orna"} {...others} />);
}

export default Component;
