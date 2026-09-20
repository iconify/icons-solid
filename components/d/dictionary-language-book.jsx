import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g16n08bwg.css';
import '../../css/w/wogt3wuuk.css';
import '../../css/n/nz5k327ms.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="g16n08bwg"/><path class="wogt3wuuk"/><path class="nz5k327ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dictionary-language-book"} {...others} />);
}

export default Component;
