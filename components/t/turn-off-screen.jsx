import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ghpkh_b3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.611 11.744c6.257 8.936 4.83 21.141-3.318 28.393s-20.437 7.252-28.586 0S.132 20.68 6.39 11.744M24 5.083v22.394");
}
</style><path class="ghpkh_b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turn-off-screen"} {...others} />);
}

export default Component;
