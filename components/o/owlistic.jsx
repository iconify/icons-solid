import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4w_e6bjj.css';
import '../../css/t/tzotlccxi.css';
import '../../css/r/rdwt7mb_k.css';
import '../../css/g/gw_35q5xw.css';
import '../../css/q/qmkkh_00g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n4w_e6bjj"/><path class="tzotlccxi"/><path class="rdwt7mb_k"/><path class="gw_35q5xw"/><path class="qmkkh_00g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:owlistic"} {...others} />);
}

export default Component;
