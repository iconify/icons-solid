import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqj3jzpsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqj3jzpsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:certificate-line"} {...others} />);
}

export default Component;
