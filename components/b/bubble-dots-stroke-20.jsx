import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aui9c_vuc.css';
import '../../css/b/bmmy7ztjn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aui9c_vuc"/><path class="bmmy7ztjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-dots-stroke-20"} {...others} />);
}

export default Component;
