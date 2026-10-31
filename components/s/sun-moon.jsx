import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/e/essobhdbt.css';
import '../../css/d/d9n4mufha.css';
import '../../css/r/ri4ate88b.css';
import '../../css/d/dt45f7agf.css';
import '../../css/o/osb5feb-f.css';
import '../../css/d/dw4wudb0i.css';
import '../../css/c/c31ti_b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><circle class="essobhdbt wm-shadow"/><circle class="d9n4mufha wm-shadow"/><path class="ri4ate88b wm-a"/><circle class="dt45f7agf wm-shadow"/><circle class="osb5feb-f wm-k"/><path class="dw4wudb0i wm-k"/><path class="c31ti_b_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sun-moon"} {...others} />);
}

export default Component;
