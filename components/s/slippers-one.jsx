import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qyxvp4bzh.css';
import '../../css/q/ql-_b-qdo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qyxvp4bzh"/><path class="ql-_b-qdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:slippers-one"} {...others} />);
}

export default Component;
