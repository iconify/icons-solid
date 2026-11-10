import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/madnxdgbd.css';
import '../../css/g/gwacaic4r.css';
import '../../css/r/r0shambwg.css';
import '../../css/x/xh2jw2brd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="madnxdgbd"/><path class="gwacaic4r"/><path class="r0shambwg"/><path class="xh2jw2brd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-gauge"} {...others} />);
}

export default Component;
