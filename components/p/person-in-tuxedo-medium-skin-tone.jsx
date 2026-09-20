import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvyvgvz5m.css';
import '../../css/m/m-bz2_bmo.css';
import '../../css/m/maj2ckbfq.css';
import '../../css/j/jv25a7boz.css';
import '../../css/q/qw5bjnh5v.css';
import '../../css/l/loqnitbvx.css';
import '../../css/b/bqn5q5byw.css';
import '../../css/a/adm11kmhj.css';
import '../../css/p/pgc6oqomb.css';
import '../../css/l/l29erq09a.css';
import '../../css/y/yq4mdtbfh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pvyvgvz5m"/><path class="m-bz2_bmo"/><path class="maj2ckbfq"/><path class="jv25a7boz"/><path class="qw5bjnh5v"/><path class="loqnitbvx"/><path class="bqn5q5byw"/><path class="adm11kmhj"/><path class="pgc6oqomb"/><path class="l29erq09a"/><path class="yq4mdtbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-in-tuxedo-medium-skin-tone"} {...others} />);
}

export default Component;
