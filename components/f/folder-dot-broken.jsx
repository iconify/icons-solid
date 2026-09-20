import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/frmd39byk.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="frmd39byk"/><path class="i4dcgmbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-broken"} {...others} />);
}

export default Component;
