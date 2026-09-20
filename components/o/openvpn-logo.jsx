import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zq51j-bcq.css';
import '../../css/c/cpnqojbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zq51j-bcq"/><path class="cpnqojbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:openvpn-logo"} {...others} />);
}

export default Component;
