import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dl66l-2-b.css';
import '../../css/f/fh75m79zz.css';
import '../../css/c/chxnb5fzt.css';
import '../../css/y/y9u6bpb3q.css';
import '../../css/m/m012cwz6p.css';
import '../../css/z/znt1rfu3y.css';
import '../../css/i/iosh_fdaf.css';
import '../../css/k/kish31buj.css';
import '../../css/p/ptq_hubxo.css';
import '../../css/v/v1t2cujut.css';
import '../../css/u/uupdugbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dl66l-2-b"/><path class="fh75m79zz"/><path class="chxnb5fzt"/><path class="y9u6bpb3q"/><path class="m012cwz6p"/><path class="znt1rfu3y"/><path class="iosh_fdaf"/><path class="kish31buj"/><path class="ptq_hubxo"/><path class="v1t2cujut"/><path class="uupdugbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:football-bold"} {...others} />);
}

export default Component;
