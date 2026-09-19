import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/q/qh30l5o3m.css';
import '../../css/f/fblylw2ot.css';
import '../../css/x/xlcp1d9yz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8vAabeZN"><g class="wqznn1ydc"><path class="qh30l5o3m"/><path class="fblylw2ot"/><path class="xlcp1d9yz"/></g></mask></defs><path mask="url(#SVG8vAabeZN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hockey"} {...others} />);
}

export default Component;
