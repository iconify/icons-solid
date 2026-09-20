import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj-g3rb9m.css';
import '../../css/z/zj02sxbpd.css';
import '../../css/c/c705-lf_d.css';
import '../../css/e/e1ft14bwt.css';
import '../../css/f/ftfel_but.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/e/eogpkjw6f.css';
import '../../css/s/swqn_zbxc.css';
import '../../css/l/l7zrq5b0w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rj-g3rb9m"/><path class="zj02sxbpd"/><path class="c705-lf_d"/><path class="e1ft14bwt"/><path class="ftfel_but"/><g class="doj9dq_jg"><path class="eogpkjw6f"/><path class="swqn_zbxc"/><path class="l7zrq5b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:speedboat"} {...others} />);
}

export default Component;
