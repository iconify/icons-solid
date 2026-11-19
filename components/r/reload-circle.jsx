import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/v/v0m19fyab.css';
import '../../css/b/bwcc2v1fm.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="v0m19fyab"/><path class="bwcc2v1fm"/><circle class="h27vhbcct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reload-circle"} {...others} />);
}

export default Component;
