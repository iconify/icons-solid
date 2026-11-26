import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r9zq_pbvq.css';
import '../../css/x/xrpwoco-f.css';
import '../../css/o/o95a1gb-o.css';
import '../../css/g/g7y3hnqws.css';
import '../../css/z/z8f_vnbhu.css';
import '../../css/t/trhcwfbpw.css';
import '../../css/q/qq99t8b9u.css';
import '../../css/a/a7vb_ccxo.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="t_2lkqbxb"><path class="r9zq_pbvq"/><path class="xrpwoco-f"/><path class="o95a1gb-o"/><path class="g7y3hnqws"/><path class="z8f_vnbhu"/><path class="trhcwfbpw"/><path class="qq99t8b9u"/><path class="a7vb_ccxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:anger-symbol"} {...others} />);
}

export default Component;
