import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsel27bbh.css';
import '../../css/x/xqhescv-e.css';
import '../../css/i/im33libln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rsel27bbh"><path class="xqhescv-e"/><path class="im33libln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vigo"} {...others} />);
}

export default Component;
