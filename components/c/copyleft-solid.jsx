import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc-3cybbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc-3cybbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:copyleft-solid"} {...others} />);
}

export default Component;
