import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed5yrxnpc.css';
import '../../css/e/exf1bchvj.css';
import '../../css/a/aodjrpjbk.css';
import '../../css/d/da3ephbql.css';
import '../../css/h/hoo6v5rta.css';
import '../../css/o/odpmc0bty.css';
import '../../css/l/lwul2kvqy.css';
import '../../css/j/jpnn8nq3e.css';
import '../../css/l/l_tr8bblb.css';
import '../../css/s/shvzp_zpw.css';
import '../../css/j/j6xgmccry.css';
import '../../css/q/qii6ukbsk.css';
import '../../css/b/bfe0wgbxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ed5yrxnpc"/><path class="exf1bchvj"/><path class="aodjrpjbk"/><path class="da3ephbql"/><path class="hoo6v5rta"/><path class="odpmc0bty"/><path class="lwul2kvqy"/><path class="jpnn8nq3e"/><path class="l_tr8bblb"/><path class="shvzp_zpw"/><path class="j6xgmccry"/><path class="qii6ukbsk"/><path class="bfe0wgbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:teddycloud"} {...others} />);
}

export default Component;
