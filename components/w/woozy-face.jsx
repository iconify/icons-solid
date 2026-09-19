import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/g/gk2pz5bsp.css';
import '../../css/k/kzut7sbwt.css';
import '../../css/x/xedi886nl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="gk2pz5bsp"/><path class="kzut7sbwt"/><path clip-rule="evenodd" class="xedi886nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woozy-face"} {...others} />);
}

export default Component;
