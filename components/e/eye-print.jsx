import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmdl50mwg.css';
import '../../css/f/fr5kl9bxl.css';
import '../../css/z/zz1e7_bjj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qmdl50mwg"/><path clip-rule="evenodd" class="fr5kl9bxl"/><path class="zz1e7_bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:eye-print"} {...others} />);
}

export default Component;
