import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jjyxsgn_q.css';
import '../../css/e/ecc6ezxwt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jjyxsgn_q"/><path class="ecc6ezxwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tree-3"} {...others} />);
}

export default Component;
