import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm3rfvbpj.css';
import '../../css/s/sy9wrqfva.css';
import '../../css/t/t8ijbdcqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vm3rfvbpj"/><path clip-rule="evenodd" class="sy9wrqfva"/><path class="t8ijbdcqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-bold"} {...others} />);
}

export default Component;
