import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/p-96z3bpw.css';
import '../../css/j/jt4c39h5v.css';
import '../../css/u/u4turoboe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="p-96z3bpw"/><path class="jt4c39h5v"/><path class="u4turoboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:woman"} {...others} />);
}

export default Component;
