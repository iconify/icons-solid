import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgxha5b3d.css';
import '../../css/x/xgliqgswb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgxha5b3d"/><path class="xgliqgswb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:keyhelp"} {...others} />);
}

export default Component;
