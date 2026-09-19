import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/frath9bzi.css';
import '../../css/y/yq35rx1fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="frath9bzi"/><path class="yq35rx1fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inbox"} {...others} />);
}

export default Component;
