import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxrwddb-l.css';
import '../../css/t/t-d_u8bnm.css';
import '../../css/n/n2ii7nb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xxrwddb-l"/><path class="t-d_u8bnm"/><path class="n2ii7nb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rgt"} {...others} />);
}

export default Component;
