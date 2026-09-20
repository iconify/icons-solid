import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w17pajbqs.css';
import '../../css/u/uq3m4zbnu.css';
import '../../css/r/r-v384qxp.css';
import '../../css/x/xhxgmq5sf.css';
import '../../css/u/urcxkybwc.css';
import '../../css/n/ndn6zujjx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w17pajbqs"/><path class="uq3m4zbnu"/><path class="r-v384qxp"/><path class="xhxgmq5sf"/><path class="urcxkybwc"/><path class="ndn6zujjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-meet"} {...others} />);
}

export default Component;
