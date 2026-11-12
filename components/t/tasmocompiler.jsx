import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xghsn32in.css';
import '../../css/s/srz3brbjf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xghsn32in"/><path class="srz3brbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasmocompiler"} {...others} />);
}

export default Component;
