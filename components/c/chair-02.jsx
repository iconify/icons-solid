import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_cjigwzb.css';
import '../../css/n/npqglvb2w.css';
import '../../css/r/rrljxjbds.css';
import '../../css/x/x6scbdbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y_cjigwzb"/><path class="npqglvb2w"/><path class="rrljxjbds"/><path class="x6scbdbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chair-02"} {...others} />);
}

export default Component;
