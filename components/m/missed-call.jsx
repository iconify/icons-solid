import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw0zruopo.css';
import '../../css/d/dubemw35h.css';
import '../../css/x/xshjxybet.css';
import '../../css/l/lwfwy-rgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="iw0zruopo"><path class="dubemw35h"/><path class="xshjxybet"/></g><path class="lwfwy-rgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:missed-call"} {...others} />);
}

export default Component;
