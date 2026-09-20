import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unc2embyj.css';
import '../../css/u/uispwaboz.css';
import '../../css/i/iwunlbmzw.css';
import '../../css/v/v00gusbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="unc2embyj"><path class="uispwaboz"/><path class="iwunlbmzw"/><path class="v00gusbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:trash-duotone-line"} {...others} />);
}

export default Component;
