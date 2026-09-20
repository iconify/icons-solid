import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/ht783wbsg.css';
import '../../css/q/q7h2v6bia.css';
import '../../css/z/zx5ptubbn.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ht783wbsg"/><path class="q7h2v6bia"/><path class="zx5ptubbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-monitor-1-flat"} {...others} />);
}

export default Component;
