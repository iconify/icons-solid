import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6s6g16ad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6s6g16ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-layout-frameless"} {...others} />);
}

export default Component;
