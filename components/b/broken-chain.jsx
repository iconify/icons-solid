import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/i/i06evpb2n.css';
import '../../css/l/ljjot3b3t.css';
import '../../css/n/n2t7gq7vg.css';
import '../../css/g/gd2j2w63c.css';
import '../../css/c/cdlzf2bls.css';
import '../../css/z/z04drlb1l.css';
import '../../css/u/uhq7jedyi.css';
import '../../css/e/e78hlbwbl.css';
import '../../css/n/n1novleer.css';
import '../../css/h/hmko39b1m.css';
import '../../css/n/nx1t82bow.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><rect transform="rotate(-45 36 38.632)" class="i06evpb2n"/><path class="ljjot3b3t"/><path class="n2t7gq7vg"/><path class="gd2j2w63c"/><circle class="cdlzf2bls"/></g><g class="z04drlb1l"><path class="uhq7jedyi"/><path class="e78hlbwbl"/><path class="n1novleer"/><path class="hmko39b1m"/><path class="nx1t82bow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:broken-chain"} {...others} />);
}

export default Component;
