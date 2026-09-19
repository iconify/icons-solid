import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-zwmjkxi.css';
import '../../css/w/w6h-t2a-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b f-zwmjkxi"/><path class="b w6h-t2a-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:web-components"} {...others} />);
}

export default Component;
