import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kq-3wkbln.css';
import '../../css/a/acxbhmlvd.css';
import '../../css/c/czknjwb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kq-3wkbln"/><path class="acxbhmlvd"/><path class="czknjwb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:server-cog-filled"} {...others} />);
}

export default Component;
