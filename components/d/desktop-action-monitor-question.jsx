import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vbz9wgb-h.css';
import '../../css/q/qkf97msjg.css';
import '../../css/x/xz3athmuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vbz9wgb-h"/><path class="qkf97msjg"/><path class="xz3athmuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:desktop-action-monitor-question"} {...others} />);
}

export default Component;
