import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mx0kys2xx {
  fill: currentColor;
  d: path("m12 15.596l3.173-3.192H8.827zM5 8h14V5H5zm0 11h14V9H5zM5 8V5zM4 20V4h16v16z");
}
</style><path class="mx0kys2xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:top-panel-open-outline-sharp"} {...others} />);
}

export default Component;
