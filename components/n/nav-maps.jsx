import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcq9xbc8n.css';
import '../../css/y/y62gldb-q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qcq9xbc8n"/><path class="y62gldb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-maps"} {...others} />);
}

export default Component;
