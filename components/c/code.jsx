import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw7ndoyex.css';
import '../../css/f/f75k8obyk.css';
import '../../css/j/jdnq1rdcq.css';
import '../../css/t/tycpm5czt.css';
import '../../css/w/wx-cxni8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw7ndoyex wm-shadow"/><path class="f75k8obyk wm-k"/><path class="jdnq1rdcq wm-k"/><path class="tycpm5czt wm-a"/><path class="wm-a wx-cxni8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:code"} {...others} />);
}

export default Component;
