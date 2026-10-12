import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxlg18n3b.css';
import '../../css/w/wn85pzjmj.css';
import '../../css/m/ml2j5ib2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nxlg18n3b"/><path class="wn85pzjmj"/><path class="ml2j5ib2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shopping-bag"} {...others} />);
}

export default Component;
