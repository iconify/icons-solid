import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb6v_57wt.css';
import '../../css/u/uryqb4bco.css';
import '../../css/y/y9indi7op.css';
import '../../css/r/rq5og3b1j.css';
import '../../css/n/nzsppacsp.css';
import '../../css/e/e8nezy4nr.css';
import '../../css/j/jd78y-y4c.css';
import '../../css/m/mlb0clbsd.css';
import '../../css/c/c_ovs66ix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eb6v_57wt"/><path class="uryqb4bco"/><circle class="y9indi7op"/><circle class="rq5og3b1j"/><circle class="nzsppacsp"/><circle class="e8nezy4nr"/><path class="jd78y-y4c"/><path class="mlb0clbsd"/><path class="c_ovs66ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:handbag"} {...others} />);
}

export default Component;
