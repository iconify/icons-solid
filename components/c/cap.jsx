import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7qa5lbsc.css';
import '../../css/u/uz-tkbbqf.css';
import '../../css/l/lruh5mb8n.css';
import '../../css/o/oa3hoyr8p.css';
import '../../css/r/rbls-1btg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7qa5lbsc"/><path clip-rule="evenodd" class="uz-tkbbqf"/><path class="lruh5mb8n"/><path class="oa3hoyr8p"/><path class="rbls-1btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cap"} {...others} />);
}

export default Component;
