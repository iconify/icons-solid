import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f6q6bbc7u.css';
import '../../css/y/ylp_vncrn.css';
import '../../css/g/gya453bci.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="f6q6bbc7u"/><path class="ylp_vncrn"/><path class="gya453bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:movie"} {...others} />);
}

export default Component;
