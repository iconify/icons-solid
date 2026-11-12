import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzk41ybbv.css';
import '../../css/x/xgliqgswb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lzk41ybbv"/><path class="xgliqgswb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:keyhelp"} {...others} />);
}

export default Component;
