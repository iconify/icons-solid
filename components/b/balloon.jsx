import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un6svxvcn.css';
import '../../css/t/tl934i07k.css';
import '../../css/z/zux1yxq_s.css';
import '../../css/y/y9_5mdb2p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="un6svxvcn"/><path class="tl934i07k"/><path class="zux1yxq_s"/><path class="y9_5mdb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:balloon"} {...others} />);
}

export default Component;
