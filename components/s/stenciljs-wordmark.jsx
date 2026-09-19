import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-5rtbc3z.css';
import '../../css/d/dmy5xccsm.css';
import '../../css/a/a-zb912jr.css';
import '../../css/c/cwjhe7-en.css';
import '../../css/s/s50twd9vz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q-5rtbc3z"/><path class="dmy5xccsm"/><path class="a-zb912jr"/><path class="cwjhe7-en"/><path class="s50twd9vz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stenciljs-wordmark"} {...others} />);
}

export default Component;
