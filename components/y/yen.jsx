import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pf7zo5b1i.css';
import '../../css/b/bpf-dccqg.css';
import '../../css/m/mwi17isqe.css';
import '../../css/n/n3vdhmblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pf7zo5b1i"/><path class="bpf-dccqg"/><path class="mwi17isqe"/><path class="n3vdhmblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:yen"} {...others} />);
}

export default Component;
