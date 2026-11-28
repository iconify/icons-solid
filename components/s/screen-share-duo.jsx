import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qemmzeblx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3uwabccu.css';
import '../../css/z/ztli_d_ek.css';
import '../../css/m/mckmxfhkw.css';
import '../../css/q/quh1t-ouf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qemmzeblx secondary"/><g class="dt0cm9dhy primary"><path class="n3uwabccu"/><path class="ztli_d_ek"/><path class="mckmxfhkw"/><path class="quh1t-ouf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:screen-share-duo"} {...others} />);
}

export default Component;
