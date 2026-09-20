import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/delk8-b6v.css';
import '../../css/y/yt_ynqbzj.css';
import '../../css/g/gsolqrbtm.css';
import '../../css/y/y_xsxeb1t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="delk8-b6v"/><path class="yt_ynqbzj"/><path class="gsolqrbtm"/><path clip-rule="evenodd" class="y_xsxeb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-podcast"} {...others} />);
}

export default Component;
