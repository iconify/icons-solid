import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mxqh5fbhw.css';
import '../../css/v/vykt7lbkd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mxqh5fbhw"/><path class="vykt7lbkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:goblet-cracking"} {...others} />);
}

export default Component;
