import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkyt55e7l.css';
import '../../css/y/y5tqvubvr.css';
import '../../css/h/h3-zd5pqb.css';
import '../../css/d/dlmz-512n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkyt55e7l"/><path class="y5tqvubvr"/><path clip-rule="evenodd" class="h3-zd5pqb"/><path class="dlmz-512n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-sad-outline"} {...others} />);
}

export default Component;
