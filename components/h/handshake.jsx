import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m17jzccch.css';
import '../../css/p/p_myk5bgm.css';
import '../../css/o/ob1k5lbpt.css';
import '../../css/f/fhjmig3kr.css';
import '../../css/x/x2u6iwlxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m17jzccch"/><path class="p_myk5bgm"/><path class="ob1k5lbpt"/><path class="fhjmig3kr"/><path class="x2u6iwlxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:handshake"} {...others} />);
}

export default Component;
