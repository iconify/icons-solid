import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jsuh66bhd.css';
import '../../css/u/uiva24bir.css';
import '../../css/o/ontfg700s.css';
import '../../css/g/ghusg13xw.css';
import '../../css/t/tisd5ib6g.css';
import '../../css/b/biidxub4u.css';
import '../../css/l/lqgw0wbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jsuh66bhd"/><path class="uiva24bir"/><path class="ontfg700s wm-shine"/><path class="ghusg13xw wm-k"/><path class="tisd5ib6g wm-a"/><path class="biidxub4u"/><path class="lqgw0wbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:volume-1"} {...others} />);
}

export default Component;
