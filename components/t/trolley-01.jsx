import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d4j2ijbuc.css';
import '../../css/t/trtjyubka.css';
import '../../css/z/zldhw_b3o.css';
import '../../css/z/ztcla3blq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d4j2ijbuc"/><circle class="trtjyubka"/><circle class="zldhw_b3o"/><path class="ztcla3blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trolley-01"} {...others} />);
}

export default Component;
