import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt31c58xs.css';
import '../../css/l/lwvq-ccsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yt31c58xs"/><path class="lwvq-ccsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netbird"} {...others} />);
}

export default Component;
