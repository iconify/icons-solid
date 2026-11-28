import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z66vey9kv.css';
import '../../css/p/pm5659b_e.css';
import '../../css/b/bx-lz44ca.css';
import '../../css/l/ld8o6wf0n.css';
import '../../css/n/nn_qfufcy.css';
import '../../css/q/qvuivg1tn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z66vey9kv"/><path class="pm5659b_e"/><path class="bx-lz44ca"/><path class="ld8o6wf0n"/><path class="nn_qfufcy"/><path class="qvuivg1tn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flower-2"} {...others} />);
}

export default Component;
