import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj0ibnjhp.css';
import '../../css/k/k5xen6bcw.css';
import '../../css/q/q3_h6bctj.css';
import '../../css/r/r02z1bc0y.css';
import '../../css/s/st7nq-iyj.css';
import '../../css/x/xlfx-bc3c.css';
import '../../css/p/p56dvxb1t.css';
import '../../css/k/keyeodbgp.css';
import '../../css/t/tkaeylbjc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gj0ibnjhp"/><path class="k5xen6bcw"/><path class="q3_h6bctj"/><path class="r02z1bc0y"/><path clip-rule="evenodd" class="st7nq-iyj"/><path class="xlfx-bc3c"/><path class="p56dvxb1t"/><path clip-rule="evenodd" class="keyeodbgp"/><path clip-rule="evenodd" class="tkaeylbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:woman-15-duo"} {...others} />);
}

export default Component;
