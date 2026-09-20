import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qnqo27bhg.css';
import '../../css/g/ghhhrbbhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qnqo27bhg"/><path class="ghhhrbbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:division-circle"} {...others} />);
}

export default Component;
