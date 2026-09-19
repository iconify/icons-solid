import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzrxlf1os.css';
import '../../css/g/gwncqhcpc.css';
import '../../css/u/ufugkktpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dzrxlf1os"/><path class="gwncqhcpc"/><path class="ufugkktpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-view"} {...others} />);
}

export default Component;
