import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6ujwntuj.css';
import '../../css/c/cvozou16p.css';
import '../../css/w/wxfgiob1y.css';
import '../../css/f/fgxemtb6x.css';
import '../../css/f/f9xj7gb0y.css';
import '../../css/p/p7i8zgbzm.css';
import '../../css/k/kwh0zczzi.css';
import '../../css/g/g0c_5ulol.css';
import '../../css/f/ff_4z4hdv.css';
import '../../css/n/neh3g_h4k.css';
import '../../css/e/eaubdgbgw.css';
import '../../css/l/l00-fkbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6ujwntuj wm-shadow"/><path class="cvozou16p wm-k"/><path class="wm-k wxfgiob1y"/><path class="fgxemtb6x wm-k"/><path class="f9xj7gb0y wm-k"/><path class="p7i8zgbzm wm-shine"/><path class="kwh0zczzi wm-k"/><path class="g0c_5ulol wm-a"/><path class="ff_4z4hdv wm-a"/><path class="neh3g_h4k wm-a"/><path class="eaubdgbgw wm-a"/><path class="l00-fkbcz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:minus-circle"} {...others} />);
}

export default Component;
