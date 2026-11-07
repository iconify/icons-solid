import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syolcfb-b.css';
import '../../css/z/zze6oyfyz.css';
import '../../css/q/qne0ekbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="syolcfb-b"/><path class="zze6oyfyz"/><path class="qne0ekbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:socket-outline"} {...others} />);
}

export default Component;
