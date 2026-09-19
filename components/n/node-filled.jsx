import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvxc-vbfr.css';
import '../../css/n/nq2wfabsf.css';
import '../../css/i/ishbz4cce.css';
import '../../css/s/sololpbna.css';
import '../../css/r/rt617yb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wvxc-vbfr"/><circle class="nq2wfabsf"/><circle class="ishbz4cce"/><circle class="sololpbna"/><circle class="rt617yb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:node-filled"} {...others} />);
}

export default Component;
