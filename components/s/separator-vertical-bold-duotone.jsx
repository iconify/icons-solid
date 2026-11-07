import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mqqgpebup.css';
import '../../css/j/jl2nx_bki.css';
import '../../css/z/zn204jbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="mqqgpebup"/><path class="jl2nx_bki"/></g><path class="zn204jbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-bold-duotone"} {...others} />);
}

export default Component;
