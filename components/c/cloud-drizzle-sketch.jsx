import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h15jcwwia.css';
import '../../css/p/prpj5j7se.css';
import '../../css/b/byvjrw0sk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h15jcwwia"/><path class="prpj5j7se wm-k"/><path class="byvjrw0sk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-drizzle-sketch"} {...others} />);
}

export default Component;
