import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fobx77b2f.css';
import '../../css/w/waa2dlbiu.css';
import '../../css/n/n21a0m78c.css';
import '../../css/n/nukv87bac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fobx77b2f"/><path class="waa2dlbiu"/><path class="n21a0m78c"/><path class="nukv87bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive-out"} {...others} />);
}

export default Component;
