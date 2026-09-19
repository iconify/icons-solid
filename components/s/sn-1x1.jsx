import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vo0ahhzyr.css';
import '../../css/m/mrpvzrb1u.css';
import '../../css/h/h-ajfgb5o.css';
import '../../css/e/e19cdjh1j.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="vo0ahhzyr"/><path class="mrpvzrb1u"/><path class="h-ajfgb5o"/></g><path class="e19cdjh1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sn-1x1"} {...others} />);
}

export default Component;
