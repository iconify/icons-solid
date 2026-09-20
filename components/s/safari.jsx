import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/f/frxo6vb7m.css';
import '../../css/g/gavebgz5n.css';
import '../../css/i/i7upoqb2t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="frxo6vb7m"/><path class="gavebgz5n"/><path class="i7upoqb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:safari"} {...others} />);
}

export default Component;
