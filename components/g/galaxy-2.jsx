import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qhgcutbto.css';
import '../../css/z/zn7zw28fg.css';
import '../../css/j/j81ci_anf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qhgcutbto"/><path class="zn7zw28fg"/><path class="j81ci_anf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:galaxy-2"} {...others} />);
}

export default Component;
