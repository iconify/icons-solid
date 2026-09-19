import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e5ch1xbsf.css';
import '../../css/x/xwroc2b7n.css';
import '../../css/n/nw4278f5v.css';
import '../../css/j/ju4c6cbsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e5ch1xbsf"/><path class="xwroc2b7n"/><path class="nw4278f5v"/><path class="ju4c6cbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:yoga-02"} {...others} />);
}

export default Component;
