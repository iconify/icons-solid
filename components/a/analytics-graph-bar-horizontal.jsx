import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6ez41b0w.css';
import '../../css/v/vm8xudbsl.css';
import '../../css/q/qyf-xkhld.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r6ez41b0w"/><path class="vm8xudbsl"/><path class="qyf-xkhld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:analytics-graph-bar-horizontal"} {...others} />);
}

export default Component;
