import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yyp5esbwc.css';
import '../../css/l/lrir3xrsq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yyp5esbwc"/><path class="lrir3xrsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:politics-vote-2"} {...others} />);
}

export default Component;
