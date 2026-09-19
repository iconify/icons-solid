import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fevrbxbxl.css';
import '../../css/w/w3_775xrs.css';
import '../../css/c/c_ih-jb4k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fevrbxbxl"/><path class="w3_775xrs"/><path class="c_ih-jb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hanfu-chinese-style"} {...others} />);
}

export default Component;
