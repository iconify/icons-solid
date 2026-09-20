import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hkv8ud7kx {
  fill: currentColor;
  d: path("M13 14h5V8h-5zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="hkv8ud7kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-landscape-2-outline-sharp"} {...others} />);
}

export default Component;
