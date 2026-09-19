import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz77wfhmf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sz77wfhmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pay-circle"} {...others} />);
}

export default Component;
