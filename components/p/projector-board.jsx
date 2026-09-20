import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bn_nq9bwn.css';
import '../../css/b/b17_pzm3l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bn_nq9bwn"/><path class="b17_pzm3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:projector-board"} {...others} />);
}

export default Component;
