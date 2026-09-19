import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b62w8-blj.css';
import '../../css/k/kpfevac6n.css';
import '../../css/q/q_slg7f6d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="b62w8-blj"/><path class="kpfevac6n"/><path class="q_slg7f6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sporting"} {...others} />);
}

export default Component;
