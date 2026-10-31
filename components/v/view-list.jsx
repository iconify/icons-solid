import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k05jl1bpw.css';
import '../../css/y/y4vs7q_0i.css';
import '../../css/c/czp08bbbg.css';
import '../../css/m/mmlid5bet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="k05jl1bpw"/><path class="y4vs7q_0i"/><rect class="czp08bbbg"/><path class="mmlid5bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:view-list"} {...others} />);
}

export default Component;
