import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oylc4jbtr.css';
import '../../css/w/w6yfmubqy.css';
import '../../css/q/qcf4fnbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oylc4jbtr"/><path class="w6yfmubqy"/><path class="qcf4fnbbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:form-edition-image-attach"} {...others} />);
}

export default Component;
