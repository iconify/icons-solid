import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cd0y8fbhg.css';
import '../../css/h/hpifqdbin.css';
import '../../css/t/t9unskp3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cd0y8fbhg"/><circle class="hpifqdbin"/><circle class="t9unskp3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:list-fail"} {...others} />);
}

export default Component;
