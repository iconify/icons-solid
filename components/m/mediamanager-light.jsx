import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkff-3cxp.css';
import '../../css/z/z6tzkqpon.css';
import '../../css/v/vcnt0ibmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wkff-3cxp"/><path class="z6tzkqpon"/><path class="vcnt0ibmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager-light"} {...others} />);
}

export default Component;
