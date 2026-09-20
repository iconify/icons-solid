import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvvawqb8a.css';
import '../../css/w/w5esiwvtl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvvawqb8a"/><path class="w5esiwvtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-sharepoint-2013"} {...others} />);
}

export default Component;
