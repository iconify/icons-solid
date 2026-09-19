import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbhtpfbxo.css';
import '../../css/d/dv2xvhb0f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbhtpfbxo"/><path class="dv2xvhb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:https"} {...others} />);
}

export default Component;
