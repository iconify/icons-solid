import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbe0iemxf.css';
import '../../css/t/tiglpdb9c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hbe0iemxf"/><path class="tiglpdb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:ongoing-conversation-rtl"} {...others} />);
}

export default Component;
