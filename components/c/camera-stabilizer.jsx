import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te6kv_ncx.css';
import '../../css/s/sw7hm_gbx.css';
import '../../css/w/wpdze0b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="te6kv_ncx"/><path class="sw7hm_gbx"/><path class="wpdze0b8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:camera-stabilizer"} {...others} />);
}

export default Component;
