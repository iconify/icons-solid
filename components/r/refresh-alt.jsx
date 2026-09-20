import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zmxinbbaj.css';
import '../../css/m/mkvecdb1a.css';
import '../../css/z/z3176dbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zmxinbbaj"/><path class="mkvecdb1a"/><path class="z3176dbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:refresh-alt"} {...others} />);
}

export default Component;
