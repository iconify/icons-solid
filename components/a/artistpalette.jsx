import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuiguff7q.css';
import '../../css/e/evzhspf6g.css';
import '../../css/t/tofyb9-yo.css';
import '../../css/y/y7v1bbcwh.css';
import '../../css/i/im6ax1imq.css';
import '../../css/u/uguf6dbib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kuiguff7q"/><path class="evzhspf6g"/><path class="tofyb9-yo"/><path class="y7v1bbcwh"/><path class="im6ax1imq"/><path class="uguf6dbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:artistpalette"} {...others} />);
}

export default Component;
