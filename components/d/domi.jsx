import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb5fwjseb.css';
import '../../css/x/xpcye44-n.css';
import '../../css/k/kcxdw0blf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb5fwjseb"/><path class="xpcye44-n"/><path clip-rule="evenodd" class="kcxdw0blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:domi"} {...others} />);
}

export default Component;
