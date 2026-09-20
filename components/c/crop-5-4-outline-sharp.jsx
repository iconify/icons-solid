import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhxqfj7vc {
  fill: currentColor;
  d: path("M4 19V5h16v14zm1-1h14V6H5zm0 0V6z");
}
</style><path class="hhxqfj7vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-5-4-outline-sharp"} {...others} />);
}

export default Component;
