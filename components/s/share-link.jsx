import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yr13dvb0y.css';
import '../../css/j/jyz31f_av.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yr13dvb0y"/><path class="jyz31f_av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:share-link"} {...others} />);
}

export default Component;
