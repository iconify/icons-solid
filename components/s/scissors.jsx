import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xo4-_ebwm.css';
import '../../css/i/iq7t8w77f.css';
import '../../css/j/jov0wrbte.css';
import '../../css/r/r-_v6zbze.css';
import '../../css/q/qx0y49bnk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xo4-_ebwm"/><path class="iq7t8w77f"/><path class="jov0wrbte"/><circle class="r-_v6zbze"/><circle class="qx0y49bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scissors"} {...others} />);
}

export default Component;
