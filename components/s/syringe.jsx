import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r042qtb1w.css';
import '../../css/k/k_2k-fkox.css';
import '../../css/h/h7btmc92c.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r042qtb1w"/><path class="k_2k-fkox"/><path class="h7btmc92c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:syringe"} {...others} />);
}

export default Component;
