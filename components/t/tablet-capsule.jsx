import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pz7crjbxp.css';
import '../../css/a/ai3cb-bmd.css';
import '../../css/p/p4d1z1b2u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pz7crjbxp"/><path class="ai3cb-bmd"/><path class="p4d1z1b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tablet-capsule"} {...others} />);
}

export default Component;
