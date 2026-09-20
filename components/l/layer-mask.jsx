import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y1xxxcbsp.css';
import '../../css/c/cy0yvc0ls.css';
import '../../css/r/r67it2j7y.css';
import '../../css/s/s8c4pubxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="y1xxxcbsp"/><path class="cy0yvc0ls"/><path class="r67it2j7y"/><path class="s8c4pubxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:layer-mask"} {...others} />);
}

export default Component;
