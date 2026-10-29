import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/on45fbcsd.css';
import '../../css/j/jwcc8uoss.css';
import '../../css/r/rstq11b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="on45fbcsd"/><path class="jwcc8uoss wm-k"/><path class="rstq11b5k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ruler-sketch"} {...others} />);
}

export default Component;
