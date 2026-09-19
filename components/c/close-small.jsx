import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dkf14nbee.css';
import '../../css/z/zqop0k_zy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dkf14nbee"/><path class="zqop0k_zy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:close-small"} {...others} />);
}

export default Component;
