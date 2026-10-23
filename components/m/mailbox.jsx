import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6-9zxb8v.css';
import '../../css/u/undmg4mvr.css';
import '../../css/i/iisbrfaoj.css';
import '../../css/c/cebkxeecy.css';
import '../../css/v/vewtb-07j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k6-9zxb8v"/><path class="undmg4mvr"/><path class="iisbrfaoj"/><path class="cebkxeecy"/><path class="vewtb-07j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mailbox"} {...others} />);
}

export default Component;
