import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i21b6im-e.css';
import '../../css/c/ci5n4gb-o.css';
import '../../css/p/pl7c8r-zm.css';
import '../../css/z/zf57u6bez.css';
import '../../css/q/q_b7ivbza.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="i21b6im-e"/><circle class="ci5n4gb-o"/><circle class="pl7c8r-zm"/><path class="zf57u6bez"/><path class="q_b7ivbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:transfer-zip"} {...others} />);
}

export default Component;
