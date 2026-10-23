import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp79sti0y.css';
import '../../css/v/vh251jb8i.css';
import '../../css/s/s4fnlfbmt.css';
import '../../css/p/pu7n3jb0y.css';
import '../../css/j/jzxerubgn.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="vp79sti0y"><path clip-rule="evenodd" class="vh251jb8i"/><path clip-rule="evenodd" class="s4fnlfbmt"/><path class="pu7n3jb0y"/><path class="jzxerubgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bitkit"} {...others} />);
}

export default Component;
