import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk-76j6vn.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/t/tip4_vb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bk-76j6vn"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><path class="tip4_vb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:workflow-check"} {...others} />);
}

export default Component;
