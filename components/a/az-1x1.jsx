import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0ezugyfx.css';
import '../../css/t/t1g-4iyfd.css';
import '../../css/o/oc8t1qu1g.css';
import '../../css/i/iqzxk5bfh.css';
import '../../css/k/krut1qckz.css';
import '../../css/e/e4w4cacyv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p0ezugyfx"/><path class="t1g-4iyfd"/><path class="oc8t1qu1g"/><circle class="iqzxk5bfh"/><circle class="krut1qckz"/><path class="e4w4cacyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:az-1x1"} {...others} />);
}

export default Component;
