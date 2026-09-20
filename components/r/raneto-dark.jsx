import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmrs3xb8n.css';
import '../../css/g/gd6c7lbvr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bmrs3xb8n"/><path class="gd6c7lbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raneto-dark"} {...others} />);
}

export default Component;
