import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svjxslq5c.css';
import '../../css/r/r5k9djb-d.css';
import '../../css/x/xgyzqtbdw.css';
import '../../css/l/lgcc12oyt.css';
import '../../css/s/sfsecrqie.css';
import '../../css/t/tnas3z5pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svjxslq5c"/><path class="r5k9djb-d"/><path class="xgyzqtbdw"/><path class="lgcc12oyt"/><path class="sfsecrqie"/><path class="tnas3z5pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:turtle"} {...others} />);
}

export default Component;
