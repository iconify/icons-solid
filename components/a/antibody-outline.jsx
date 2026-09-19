import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vor0eyoyz.css';
import '../../css/h/hnhmf1b1t.css';
import '../../css/i/i-unjrbqs.css';
import '../../css/o/o64dbibmw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vor0eyoyz"/><path class="hnhmf1b1t"/><path class="i-unjrbqs"/><path clip-rule="evenodd" class="o64dbibmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:antibody-outline"} {...others} />);
}

export default Component;
