import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v5zhtkbbw.css';
import '../../css/e/eh4vwp2pz.css';
import '../../css/b/baq_7_bee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v5zhtkbbw wm-shadow"/><path class="eh4vwp2pz wm-shadow"/><path class="baq_7_bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:person-running"} {...others} />);
}

export default Component;
