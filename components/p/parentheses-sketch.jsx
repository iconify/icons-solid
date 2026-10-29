import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mrtrwabef.css';
import '../../css/m/m0xezd38o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mrtrwabef"/><path class="m0xezd38o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:parentheses-sketch"} {...others} />);
}

export default Component;
