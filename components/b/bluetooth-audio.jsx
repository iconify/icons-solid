import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tf-n2zbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.933 34.212l20.049-19.933L22.189 4.5v39l9.793-9.779l-20.049-19.933");
}

.yh6d9qb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.177 20.56c.825.618 1.512 2.198 1.374 3.916c-.137 1.306-.824 2.405-1.374 2.817m2.405-9.413c1.443 1.099 2.611 3.916 2.474 7.008c-.206 2.336-1.375 4.26-2.474 5.085");
}
</style><path class="tf-n2zbiv"/><path class="yh6d9qb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bluetooth-audio"} {...others} />);
}

export default Component;
