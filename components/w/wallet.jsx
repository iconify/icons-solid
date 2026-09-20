import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idbupnmzr.css';
import '../../css/r/ruip4jr8k.css';
import '../../css/f/fp56qxbvd.css';
import '../../css/n/nf6s2rbdo.css';
import '../../css/g/gq5luxbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="idbupnmzr"/><path class="ruip4jr8k"/><path class="fp56qxbvd"/><path class="nf6s2rbdo"/><path class="gq5luxbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wallet"} {...others} />);
}

export default Component;
