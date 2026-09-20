import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o3e5wu7_t.css';
import '../../css/y/yeqejsb_w.css';
import '../../css/l/lt3ivrb_m.css';
import '../../css/t/trtof2g-p.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o3e5wu7_t"/><path class="yeqejsb_w"/><path class="lt3ivrb_m"/><path class="trtof2g-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yen"} {...others} />);
}

export default Component;
