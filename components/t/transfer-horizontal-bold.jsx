import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb8a2xbld.css';
import '../../css/m/muj3adbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb8a2xbld"/><path class="muj3adbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-horizontal-bold"} {...others} />);
}

export default Component;
