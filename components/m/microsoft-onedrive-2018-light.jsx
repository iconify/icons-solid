import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by00xob_x.css';
import '../../css/q/qhvaocbxk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="by00xob_x"/><path class="qhvaocbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-2018-light"} {...others} />);
}

export default Component;
