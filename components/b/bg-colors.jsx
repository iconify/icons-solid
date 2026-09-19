import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoofr1q7y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xoofr1q7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bg-colors"} {...others} />);
}

export default Component;
