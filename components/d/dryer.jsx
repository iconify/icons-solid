import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd1c6r6js.css';
import '../../css/w/w2m_ohw5p.css';
import '../../css/a/au8al9bwl.css';
import '../../css/b/b91nf-b_y.css';
import '../../css/r/rlh92bczv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nd1c6r6js"/><path class="w2m_ohw5p"/><circle class="au8al9bwl"/><path class="b91nf-b_y"/><path class="rlh92bczv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dryer"} {...others} />);
}

export default Component;
