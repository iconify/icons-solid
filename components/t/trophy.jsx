import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jp1motbyt.css';
import '../../css/n/nx63ijb5l.css';
import '../../css/x/xy-_f_xin.css';
import '../../css/e/eh7j-rb3q.css';
import '../../css/q/qj7stfkyz.css';
import '../../css/p/p5cxbebjq.css';
import '../../css/u/u3_gno3gz.css';
import '../../css/n/nru95nb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jp1motbyt wm-shadow"/><path class="nx63ijb5l"/><path class="xy-_f_xin"/><path class="eh7j-rb3q"/><path class="qj7stfkyz"/><path class="p5cxbebjq"/><path class="u3_gno3gz"/><path class="nru95nb0h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:trophy"} {...others} />);
}

export default Component;
