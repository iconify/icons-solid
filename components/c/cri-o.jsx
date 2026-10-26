import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqpglquyh.css';
import '../../css/c/crec0zbbt.css';
import '../../css/c/cvq3icbyo.css';
import '../../css/l/lwc8jenrr.css';
import '../../css/p/p_f1f9cdl.css';
import '../../css/j/jsuncdc0k.css';

const viewBox = {"width":370.5,"height":362,"left":-5.38,"top":-1.13};
const content = `<path class="aqpglquyh"/><path class="crec0zbbt"/><path class="cvq3icbyo"/><path class="lwc8jenrr"/><path class="p_f1f9cdl"/><path class="jsuncdc0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:cri-o"} {...others} />);
}

export default Component;
