import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w0wqrbbmr.css';
import '../../css/j/jqhgracnq.css';
import '../../css/n/n64tapbno.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="w0wqrbbmr"/><path class="jqhgracnq"/><path class="n64tapbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:xiaodu-home"} {...others} />);
}

export default Component;
