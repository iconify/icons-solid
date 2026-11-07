import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg_-zhtuq.css';
import '../../css/l/l_il2h-zw.css';
import '../../css/l/ltmsysb1k.css';
import '../../css/h/hzz4-tdid.css';
import '../../css/n/na6pblbiv.css';
import '../../css/z/zd6l52a5s.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kg_-zhtuq"/><path clip-rule="evenodd" class="l_il2h-zw"/><path class="ltmsysb1k"/><path class="hzz4-tdid"/><path class="na6pblbiv"/><path class="zd6l52a5s"/><path clip-rule="evenodd" class="nbozb93jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-outline"} {...others} />);
}

export default Component;
