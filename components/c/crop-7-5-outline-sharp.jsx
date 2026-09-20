import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxhlm2y6d {
  fill: currentColor;
  d: path("M3 19V5h18v14zm2-2h14V7H5zm0 0V7z");
}
</style><path class="gxhlm2y6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-7-5-outline-sharp"} {...others} />);
}

export default Component;
