import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyxukz89o.css';
import '../../css/z/zfqmlvbbt.css';
import '../../css/d/drrqprdbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="eyxukz89o"><path class="zfqmlvbbt"/><path class="drrqprdbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:redo"} {...others} />);
}

export default Component;
