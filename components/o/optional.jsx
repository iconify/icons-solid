import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/l/l55bqewud.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utf5_xbzs"/><path class="l55bqewud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:optional"} {...others} />);
}

export default Component;
