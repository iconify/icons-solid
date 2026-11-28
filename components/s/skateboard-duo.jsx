import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c843pkykg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x11pprywc.css';
import '../../css/v/vcp9f7b5e.css';
import '../../css/z/z2r0njj4k.css';
import '../../css/h/htzsep-dn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c843pkykg secondary"/><g class="dt0cm9dhy primary"><path class="x11pprywc"/><path class="vcp9f7b5e"/><path class="z2r0njj4k"/><path class="htzsep-dn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:skateboard-duo"} {...others} />);
}

export default Component;
