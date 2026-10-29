import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4h8h5o3s.css';
import '../../css/j/jk9u2pcha.css';
import '../../css/f/f210u48wn.css';
import '../../css/w/wih7v0yra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4h8h5o3s wm-k"/><path class="jk9u2pcha wm-k"/><path class="f210u48wn wm-k"/><path class="wih7v0yra wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:trending-down"} {...others} />);
}

export default Component;
