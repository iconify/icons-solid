import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d41pbtbxe.css';
import '../../css/y/ygb0dxbvv.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wcjd_ebtn.css';
import '../../css/p/pw92eib9a.css';
import '../../css/e/ehs1ysfsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="d41pbtbxe"/><rect class="ygb0dxbvv"/><g class="mc2zb0bvp"><path class="wcjd_ebtn"/><path class="pw92eib9a"/><path class="ehs1ysfsl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:replace"} {...others} />);
}

export default Component;
