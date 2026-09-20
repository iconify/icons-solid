import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwgmc0e6k.css';
import '../../css/i/ipamtibyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hwgmc0e6k"/><path class="ipamtibyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoke-ai"} {...others} />);
}

export default Component;
