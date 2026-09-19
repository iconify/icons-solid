import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r9duqtb3q.css';
import '../../css/v/vvujsob2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r9duqtb3q"/><path class="vvujsob2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bread-04"} {...others} />);
}

export default Component;
