import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/x/xq_q36b2n.css';
import '../../css/f/f3weqj-8w.css';
import '../../css/q/qah-hrh_f.css';
import '../../css/l/l-qmr2bih.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="xq_q36b2n"/><path clip-rule="evenodd" class="f3weqj-8w"/><path clip-rule="evenodd" class="qah-hrh_f"/><path clip-rule="evenodd" class="l-qmr2bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:react-light"} {...others} />);
}

export default Component;
