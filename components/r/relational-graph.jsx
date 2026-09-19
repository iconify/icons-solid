import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b533hcelw.css';
import '../../css/g/gnjz5lq-f.css';
import '../../css/a/amc7g4h-g.css';
import '../../css/r/rz08hnbgv.css';
import '../../css/q/q3u1c6bhx.css';
import '../../css/p/p-w1uacgb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b533hcelw"/><path class="gnjz5lq-f"/><path class="amc7g4h-g"/><circle class="rz08hnbgv"/><circle class="q3u1c6bhx"/><circle class="p-w1uacgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:relational-graph"} {...others} />);
}

export default Component;
