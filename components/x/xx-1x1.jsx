import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb76bo8sb.css';
import '../../css/w/wvlg02bvg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cb76bo8sb"/><path class="wvlg02bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:xx-1x1"} {...others} />);
}

export default Component;
