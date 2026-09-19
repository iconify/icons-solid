import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/y/ygoihm2_o.css';
import '../../css/w/w0-fnvnzh.css';
import '../../css/m/mcckfvh8k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="ygoihm2_o"/><path class="w0-fnvnzh"/><path class="mcckfvh8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:sonar-cloud"} {...others} />);
}

export default Component;
