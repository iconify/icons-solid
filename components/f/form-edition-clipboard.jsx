import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mr5wlsfwt.css';
import '../../css/o/o9g_tgbxj.css';
import '../../css/j/jfcf3j0tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mr5wlsfwt"/><path class="o9g_tgbxj"/><path class="jfcf3j0tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:form-edition-clipboard"} {...others} />);
}

export default Component;
