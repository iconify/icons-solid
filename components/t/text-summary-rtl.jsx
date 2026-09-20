import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wduc6h5_x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wduc6h5_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:text-summary-rtl"} {...others} />);
}

export default Component;
