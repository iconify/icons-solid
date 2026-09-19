import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ochdq0byd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ochdq0byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:audit-outlined"} {...others} />);
}

export default Component;
