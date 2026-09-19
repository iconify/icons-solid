import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/d1w4zdbdx.css';
import '../../css/v/vyyqxrmka.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/j/ju9671gez.css';
import '../../css/a/adxvy6b6n.css';
import '../../css/r/rjxnyhb6q.css';
import '../../css/b/bvqnlub5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="d1w4zdbdx"/><path class="vyyqxrmka"/><path class="ow5qbpbcb"/><path class="ju9671gez"/><path class="adxvy6b6n"/><path class="rjxnyhb6q"/><path class="bvqnlub5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dubai"} {...others} />);
}

export default Component;
