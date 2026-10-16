import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi9ey6-_v.css';
import '../../css/d/ddxiy4bwd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vi9ey6-_v"/><path class="ddxiy4bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:superscript-48-bold"} {...others} />);
}

export default Component;
