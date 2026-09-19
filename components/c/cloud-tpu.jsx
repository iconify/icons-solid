import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psiglkazx.css';
import '../../css/d/dcqj1achm.css';
import '../../css/l/layyr9bfc.css';
import '../../css/l/led535b6d.css';
import '../../css/a/a-i5_5xwr.css';
import '../../css/k/kddvgbcgs.css';
import '../../css/k/kkqgds_dl.css';
import '../../css/l/lxg-qzbst.css';
import '../../css/u/uo4j-r5ke.css';
import '../../css/s/sbb5v6byu.css';
import '../../css/o/ox9fxyz7i.css';
import '../../css/w/wb4o29bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="psiglkazx"><path class="dcqj1achm"/><path class="layyr9bfc"/><path class="led535b6d"/><path class="a-i5_5xwr"/><path class="kddvgbcgs"/><circle class="kkqgds_dl"/><circle class="lxg-qzbst"/><circle class="uo4j-r5ke"/><circle class="sbb5v6byu"/></g><path class="ox9fxyz7i"/><path class="wb4o29bmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-tpu"} {...others} />);
}

export default Component;
