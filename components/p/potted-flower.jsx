import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z8kw8-rfx.css';
import '../../css/c/cp8yk3bej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="z8kw8-rfx"/><path class="cp8yk3bej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:potted-flower"} {...others} />);
}

export default Component;
