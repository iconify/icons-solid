import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aydtu_b4n.css';
import '../../css/t/t7lh1l2wd.css';
import '../../css/h/hcbw2pbbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aydtu_b4n"/><path class="t7lh1l2wd"/><path class="hcbw2pbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-out"} {...others} />);
}

export default Component;
