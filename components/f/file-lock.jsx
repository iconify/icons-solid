import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k05o5frbn.css';
import '../../css/a/ajf99rb5u.css';
import '../../css/d/dq8xtjbji.css';
import '../../css/k/khoqvbb0x.css';
import '../../css/m/mqorzenfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k05o5frbn"/><path class="ajf99rb5u"/><path class="dq8xtjbji"/><rect class="khoqvbb0x"/><path class="mqorzenfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-lock"} {...others} />);
}

export default Component;
