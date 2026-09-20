import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zxcx5zq9t {
  fill: currentColor;
  d: path("M12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9zm0-2.85l9.1-9.1q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05z");
}
</style><path class="zxcx5zq9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-wifi-0-bar-outline"} {...others} />);
}

export default Component;
