import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dw9quyb8n.css';
import '../../css/w/wbknnx6bq.css';
import '../../css/x/xoczt_b8w.css';
import '../../css/d/dqty3c3-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dw9quyb8n"/><path class="wbknnx6bq"/><path class="xoczt_b8w"/><path class="dqty3c3-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:advertising-ad-browser"} {...others} />);
}

export default Component;
