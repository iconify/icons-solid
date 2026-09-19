import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvo1o4byr.css';
import '../../css/q/qzwrsetpw.css';
import '../../css/z/z8xma-crw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvo1o4byr"/><path class="qzwrsetpw"/><path class="z8xma-crw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bactriancamel"} {...others} />);
}

export default Component;
