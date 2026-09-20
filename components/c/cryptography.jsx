import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9kx-7laj.css';
import '../../css/c/cg_xnnvfh.css';
import '../../css/m/m0cypi6yc.css';
import '../../css/f/fkp657udb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i9kx-7laj"/><path class="cg_xnnvfh"/><path class="m0cypi6yc"/><path class="fkp657udb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cryptography"} {...others} />);
}

export default Component;
