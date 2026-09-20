import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zh3rlvg1g.css';
import '../../css/d/drpi2rnww.css';
import '../../css/p/prdxi2boq.css';
import '../../css/x/x0hei1vnw.css';
import '../../css/a/az5il4bxn.css';
import '../../css/e/ejslskxqt.css';
import '../../css/n/n-mgyccco.css';
import '../../css/r/r0s1rwb2r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zh3rlvg1g"/><path class="drpi2rnww"/><path class="prdxi2boq"/><path class="x0hei1vnw"/><path class="az5il4bxn"/><path class="ejslskxqt"/><path class="n-mgyccco"/><path class="r0s1rwb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:computer-pc-desktop"} {...others} />);
}

export default Component;
