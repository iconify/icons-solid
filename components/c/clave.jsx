import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w_trteulp.css';
import '../../css/e/er4vg3bzc.css';
import '../../css/i/iw2rq42jc.css';
import '../../css/g/g6ky-mbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w_trteulp"/><path class="er4vg3bzc"/><path class="iw2rq42jc"/><path class="g6ky-mbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:clave"} {...others} />);
}

export default Component;
