import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfi3u8b2c.css';
import '../../css/z/zkxf1fpeo.css';
import '../../css/s/s-_2zybqn.css';
import '../../css/w/wr271gibo.css';
import '../../css/h/h3j5vt4od.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfi3u8b2c"/><path class="zkxf1fpeo"/><path class="s-_2zybqn"/><path class="wr271gibo"/><path class="h3j5vt4od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:users"} {...others} />);
}

export default Component;
