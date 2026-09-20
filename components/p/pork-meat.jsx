import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjb-strbf.css';
import '../../css/l/l3svlmgau.css';
import '../../css/o/oksw6zbjt.css';
import '../../css/k/kmbccudpf.css';
import '../../css/j/jda-zrwis.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xjb-strbf"/><path class="l3svlmgau"/><path class="oksw6zbjt"/><path class="kmbccudpf"/><path class="jda-zrwis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pork-meat"} {...others} />);
}

export default Component;
