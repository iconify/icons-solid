import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy8iuubej.css';
import '../../css/y/yc11i_vei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sy8iuubej"/><path class="yc11i_vei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-up-20"} {...others} />);
}

export default Component;
