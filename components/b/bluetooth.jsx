import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npvyk8bwj.css';
import '../../css/o/otc7hdckt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="npvyk8bwj"/><path class="otc7hdckt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bluetooth"} {...others} />);
}

export default Component;
