import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av7qmjbdc.css';
import '../../css/x/xnlpiqbcd.css';
import '../../css/v/vc3m3pbaa.css';
import '../../css/j/jysb2bbxh.css';
import '../../css/q/q75ztzbgi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="av7qmjbdc"/><path class="xnlpiqbcd"/><path class="vc3m3pbaa"/><path class="jysb2bbxh"/><path class="q75ztzbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:automatic1111-dark"} {...others} />);
}

export default Component;
