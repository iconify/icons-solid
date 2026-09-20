import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zs55py_dd.css';
import '../../css/w/w0yyhnhhh.css';
import '../../css/a/aadkrzmmh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(90 11.5 7.5)" class="zs55py_dd"/><rect transform="rotate(90 2.5 7)" class="w0yyhnhhh"/><path class="aadkrzmmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-vertical-center-align-design-middle"} {...others} />);
}

export default Component;
