import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a28bgccdc {
  fill: currentColor;
  d: path("M4 19V5h1v14zm8-2.692L7.692 12L12 7.692l.708.708l-3.1 3.1H20v1H9.608l3.1 3.1z");
}
</style><path class="a28bgccdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-align-left-sharp"} {...others} />);
}

export default Component;
