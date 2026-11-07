import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgubodb0p.css';
import '../../css/u/uj0gagb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgubodb0p"/><path clip-rule="evenodd" class="uj0gagb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balloon-outline"} {...others} />);
}

export default Component;
