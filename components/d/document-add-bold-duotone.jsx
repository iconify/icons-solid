import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/o/o1cm0nmqw.css';
import '../../css/q/qvk8skbsz.css';
import '../../css/a/a5ennrb7p.css';
import '../../css/p/pi96kxbsl.css';
import '../../css/p/pzc7drbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="o1cm0nmqw"/><path class="qvk8skbsz"/><path class="a5ennrb7p"/><path class="pi96kxbsl"/><path class="pzc7drbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-add-bold-duotone"} {...others} />);
}

export default Component;
