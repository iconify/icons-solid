import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fszl7_bhp {
  fill: currentColor;
  d: path("M12.616 14.385h5v-6h-5zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="fszl7_bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:float-landscape-2-outline-sharp"} {...others} />);
}

export default Component;
