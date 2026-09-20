import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqzjg74_k.css';
import '../../css/x/xf-y1rnlx.css';
import '../../css/i/is60ubtfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="lqzjg74_k"/><path class="xf-y1rnlx"/><path clip-rule="evenodd" class="is60ubtfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:user-reading"} {...others} />);
}

export default Component;
