import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jhtled03j.css';
import '../../css/a/a_05w3ova.css';
import '../../css/q/qovw8ccxr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jhtled03j"/><path class="a_05w3ova"/><path class="qovw8ccxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cat-2"} {...others} />);
}

export default Component;
