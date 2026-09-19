import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/ryp-z5bxc.css';
import '../../css/w/wjq_f-bnz.css';
import '../../css/t/t8dyhxr9l.css';
import '../../css/l/ls8xdfges.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ryp-z5bxc"/><path class="wjq_f-bnz"/><path class="t8dyhxr9l"/><path class="ls8xdfges"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-image"} {...others} />);
}

export default Component;
