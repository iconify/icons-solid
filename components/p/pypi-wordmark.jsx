import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm6xu5qlz.css';
import '../../css/g/gze-i1bjd.css';
import '../../css/n/nthlryb5l.css';
import '../../css/z/zqhsol6ty.css';
import '../../css/x/x9cogob7v.css';
import '../../css/k/ktmgep31u.css';
import '../../css/b/b_4e_h0xp.css';
import '../../css/g/gwnoigjbx.css';
import '../../css/q/qzu8rzvia.css';
import '../../css/w/wch9qtb2k.css';
import '../../css/o/omcvklmkg.css';
import '../../css/k/ko1yq8bts.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vm6xu5qlz"/><path class="gze-i1bjd"/><path class="nthlryb5l"/><path class="zqhsol6ty"/><path class="x9cogob7v"/><path class="ktmgep31u"/><path class="b_4e_h0xp"/><path class="gwnoigjbx"/><path class="qzu8rzvia"/><path class="wch9qtb2k"/><path class="omcvklmkg"/><path class="ko1yq8bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pypi-wordmark"} {...others} />);
}

export default Component;
