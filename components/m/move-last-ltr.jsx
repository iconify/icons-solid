import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlnc2n5di.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qlnc2n5di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:move-last-ltr"} {...others} />);
}

export default Component;
