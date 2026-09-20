import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/k/kun71ryne.css';
import '../../css/j/jepyzgbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="kun71ryne"/><path class="jepyzgbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-open-duotone-line"} {...others} />);
}

export default Component;
