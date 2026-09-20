import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwvtwsb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwvtwsb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:pad-outlined"} {...others} />);
}

export default Component;
