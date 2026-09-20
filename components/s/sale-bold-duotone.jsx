import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qv_28mbpl.css';
import '../../css/g/gp40rmg8q.css';
import '../../css/w/we8ntkyae.css';
import '../../css/l/le3mabldv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qv_28mbpl"/><path class="gp40rmg8q"/><path class="we8ntkyae"/><path class="le3mabldv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-bold-duotone"} {...others} />);
}

export default Component;
