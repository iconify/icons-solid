import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv3xjpb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv3xjpb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:volume-off-outlined"} {...others} />);
}

export default Component;
