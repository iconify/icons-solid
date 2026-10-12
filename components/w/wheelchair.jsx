import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuv0y_bdn.css';
import '../../css/n/nfvynso3h.css';
import '../../css/p/pdnlm5btl.css';
import '../../css/a/a1k78mcvw.css';
import '../../css/g/gyowso2ne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="yuv0y_bdn"/><circle class="nfvynso3h"/><circle class="pdnlm5btl"/><circle class="a1k78mcvw"/><path class="gyowso2ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wheelchair"} {...others} />);
}

export default Component;
