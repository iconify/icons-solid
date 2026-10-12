import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4c62ebkm.css';
import '../../css/r/r73y4l0lb.css';
import '../../css/l/l18-qh_sc.css';
import '../../css/w/wtynoab0c.css';
import '../../css/c/cs26b0n7v.css';
import '../../css/s/s23j25bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v4c62ebkm"/><path class="r73y4l0lb"/><path class="l18-qh_sc"/><path class="wtynoab0c"/><path class="cs26b0n7v"/><path class="s23j25bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cat"} {...others} />);
}

export default Component;
