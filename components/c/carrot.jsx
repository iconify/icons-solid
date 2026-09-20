import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dx02zjbfc.css';
import '../../css/v/vpmjg3bfz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dx02zjbfc"/><path class="vpmjg3bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:carrot"} {...others} />);
}

export default Component;
