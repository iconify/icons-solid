import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/q/q_h6m8bij.css';
import '../../css/g/gb5wrjb_f.css';
import '../../css/p/p1f2yh1op.css';
import '../../css/q/q2jaocb-d.css';
import '../../css/c/cfmxlxb_b.css';
import '../../css/t/tdqnz4bst.css';
import '../../css/o/oqjllsbdf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="q_h6m8bij"/><circle class="gb5wrjb_f"/><circle class="p1f2yh1op"/><circle class="q2jaocb-d"/><circle class="cfmxlxb_b"/><circle class="tdqnz4bst"/><path class="oqjllsbdf"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-singapore"} {...others} />);
}

export default Component;
