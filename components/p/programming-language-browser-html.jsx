import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j-wm-8r3v.css';
import '../../css/b/b34n1w8cn.css';
import '../../css/s/sslwlcb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j-wm-8r3v"/><path class="b34n1w8cn"/><path class="sslwlcb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-language-browser-html"} {...others} />);
}

export default Component;
