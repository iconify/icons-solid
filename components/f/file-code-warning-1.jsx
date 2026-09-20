import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pwpjv5bhc.css';
import '../../css/s/sx98n481k.css';
import '../../css/e/e2qt_5bqy.css';
import '../../css/x/xq45cg75b.css';
import '../../css/p/py5tbrbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pwpjv5bhc"/><path class="sx98n481k"/><path class="e2qt_5bqy"/><path class="xq45cg75b"/><path class="py5tbrbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:file-code-warning-1"} {...others} />);
}

export default Component;
