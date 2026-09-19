import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xgmamqbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.216 4.5h8.008v39h-8.008zm16.7 21.734c6.002 0 10.868-4.865 10.868-10.867S32.918 4.5 26.916 4.5h-8.691v21.734zm2.757-.385V4.886");
}
</style><path class="xgmamqbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pachli"} {...others} />);
}

export default Component;
