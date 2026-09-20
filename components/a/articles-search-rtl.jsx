import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuzmv5bfi.css';
import '../../css/m/m3ckqtbim.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uuzmv5bfi"/><path class="m3ckqtbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:articles-search-rtl"} {...others} />);
}

export default Component;
