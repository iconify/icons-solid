import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bksauhb2k.css';
import '../../css/e/el5avswvr.css';
import '../../css/l/l41p0248x.css';
import '../../css/l/l_1bv1bce.css';
import '../../css/r/rxa9rtbju.css';
import '../../css/d/dnlw5ubyr.css';
import '../../css/f/fw9drl_hd.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/z/z5fklxhkg.css';
import '../../css/g/gcqeicc4p.css';
import '../../css/h/hrl54mtaq.css';
import '../../css/z/zwfw_yhhc.css';

const viewBox = {"width":72,"height":72};
const content = `<g transform="translate(3.693 6.164)scale(.8974)"><path class="bksauhb2k"/><path class="el5avswvr"/><path class="l41p0248x"/><circle class="l_1bv1bce"/><path class="rxa9rtbju"/><path class="dnlw5ubyr"/><circle class="fw9drl_hd"/></g><g transform="translate(3.693 6.164)scale(.8974)" class="rpvb-o6bq"><circle class="z5fklxhkg"/><path class="gcqeicc4p"/><path class="hrl54mtaq"/><circle class="zwfw_yhhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-chess-bishop"} {...others} />);
}

export default Component;
