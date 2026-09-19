import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk8c-26km.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xk8c-26km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:small-dash-outlined"} {...others} />);
}

export default Component;
