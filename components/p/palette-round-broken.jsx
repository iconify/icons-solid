import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/we59iwbxd.css';
import '../../css/s/s-ypsc2gv.css';
import '../../css/m/md3jkubdy.css';
import '../../css/d/dlgm9h3nj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="we59iwbxd"/><path class="s-ypsc2gv"/><path class="md3jkubdy"/><path class="dlgm9h3nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-broken"} {...others} />);
}

export default Component;
