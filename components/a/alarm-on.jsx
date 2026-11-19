import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2yysvd-n.css';
import '../../css/b/bj96j6xnf.css';
import '../../css/y/y7-uw_brl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="z2yysvd-n"/><circle class="bj96j6xnf"/><path class="y7-uw_brl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:alarm-on"} {...others} />);
}

export default Component;
