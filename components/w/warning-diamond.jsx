import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d3ycrob1i.css';
import '../../css/e/e6ryrsbdm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d3ycrob1i"/><path class="e6ryrsbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:warning-diamond"} {...others} />);
}

export default Component;
