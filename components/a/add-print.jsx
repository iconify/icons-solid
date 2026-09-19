import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/k/kshvrmxkq.css';
import '../../css/v/v121jkdcl.css';
import '../../css/t/tm8du2wue.css';
import '../../css/k/kbaxmbcxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="kshvrmxkq"/><path class="v121jkdcl"/><path class="tm8du2wue"/><path class="kbaxmbcxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-print"} {...others} />);
}

export default Component;
