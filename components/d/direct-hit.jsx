import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndotclb-j.css';
import '../../css/g/gfvgp3s4p.css';
import '../../css/r/rpsojvbqi.css';
import '../../css/v/vt4eslqep.css';
import '../../css/k/kzhfhq32y.css';
import '../../css/d/d_pcxob7h.css';
import '../../css/b/b5xokr54v.css';
import '../../css/t/tvnrasb1q.css';
import '../../css/y/yp1zapj3u.css';
import '../../css/z/zue30tbtl.css';
import '../../css/o/ox_20ob0c.css';
import '../../css/n/n83vljbgm.css';
import '../../css/h/hyritqbhn.css';
import '../../css/k/kxstsh_qu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ndotclb-j"/><path class="gfvgp3s4p"/><path class="rpsojvbqi"/><path class="vt4eslqep"/><path class="kzhfhq32y"/><path class="d_pcxob7h"/><path class="b5xokr54v"/><path class="tvnrasb1q"/><path class="yp1zapj3u"/><path class="zue30tbtl"/><path class="ox_20ob0c"/><path class="n83vljbgm"/><path class="hyritqbhn"/><path class="kxstsh_qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:direct-hit"} {...others} />);
}

export default Component;
