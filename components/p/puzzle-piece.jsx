import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywpwovbzl.css';
import '../../css/y/y6255tk5g.css';
import '../../css/v/vcohdmhiw.css';
import '../../css/p/p66700blt.css';
import '../../css/b/b0bfo09xm.css';
import '../../css/x/xksltxbgs.css';
import '../../css/l/l95521bte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow ywpwovbzl"/><path class="y6255tk5g"/><path class="vcohdmhiw"/><path class="p66700blt"/><path class="b0bfo09xm"/><path class="wm-shine xksltxbgs"/><path class="l95521bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:puzzle-piece"} {...others} />);
}

export default Component;
