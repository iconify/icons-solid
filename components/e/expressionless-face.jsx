import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/y/yjk7vhbrm.css';
import '../../css/u/u0zt-bbcz.css';
import '../../css/b/bg3505kcu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="yjk7vhbrm"/><path class="u0zt-bbcz"/><path class="bg3505kcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expressionless-face"} {...others} />);
}

export default Component;
