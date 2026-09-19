import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iled-gbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.443 20.636A13 13 0 1 1 24 37");
}

.nwinupoew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.852 22.05A7.5 7.5 0 0 1 36 37H12a7.5 7.5 0 1 1 5.304-12.803");
}

.oxtk0gb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.061 20.465l2.475 2.475a1.497 1.497 0 0 1 0 2.12l-2.475 2.476a1.497 1.497 0 0 1-2.121 0l-2.475-2.475a1.497 1.497 0 0 1 0-2.121l2.475-2.475a1.497 1.497 0 0 1 2.121 0");
}
</style><path class="iled-gbgt"/><path class="nwinupoew"/><path class="oxtk0gb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:onething-cloud"} {...others} />);
}

export default Component;
