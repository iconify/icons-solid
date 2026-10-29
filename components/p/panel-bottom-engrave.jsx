import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjtghllwe.css';
import '../../css/g/gl--lubve.css';
import '../../css/e/e2_mtpbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cjtghllwe"/><path class="gl--lubve wm-shadow"/><path class="e2_mtpbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-bottom-engrave"} {...others} />);
}

export default Component;
