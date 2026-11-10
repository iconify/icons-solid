import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud52wt7ld.css';
import '../../css/x/xdhs1acgm.css';
import '../../css/m/m_ql9ubar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ud52wt7ld"/><path class="xdhs1acgm"/><path class="m_ql9ubar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:whistle"} {...others} />);
}

export default Component;
