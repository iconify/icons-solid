import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2at43bsa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l2at43bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:trademark"} {...others} />);
}

export default Component;
