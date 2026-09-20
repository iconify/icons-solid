import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jl8kb8ifb.css';
import '../../css/p/pf9j_q2uf.css';
import '../../css/k/knsj2rbxw.css';
import '../../css/y/y-w679b1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jl8kb8ifb"/><path class="pf9j_q2uf"/><path class="knsj2rbxw"/><path class="y-w679b1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-sync"} {...others} />);
}

export default Component;
