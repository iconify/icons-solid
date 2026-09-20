import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruw4ycbmp {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4H6zm0 0V4z");
}
</style><path class="ruw4ycbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-portrait-outline-sharp"} {...others} />);
}

export default Component;
