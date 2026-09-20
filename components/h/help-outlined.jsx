import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd93nu3lx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd93nu3lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:help-outlined"} {...others} />);
}

export default Component;
