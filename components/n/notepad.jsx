import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w0-4jlb6y.css';
import '../../css/t/tdrz0wbbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="w0-4jlb6y"/><path class="tdrz0wbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:notepad"} {...others} />);
}

export default Component;
