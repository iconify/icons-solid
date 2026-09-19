import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zlv2tpb4e.css';
import '../../css/z/z3h29obsl.css';
import '../../css/m/m-mcntenk.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zlv2tpb4e"/><path class="z3h29obsl"/><path class="m-mcntenk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-down"} {...others} />);
}

export default Component;
