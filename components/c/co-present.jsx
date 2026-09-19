import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wena4ilcp.css';
import '../../css/l/lmegi90tj.css';
import '../../css/k/kwfnbbc6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wena4ilcp"/><path class="lmegi90tj"/><path class="kwfnbbc6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:co-present"} {...others} />);
}

export default Component;
