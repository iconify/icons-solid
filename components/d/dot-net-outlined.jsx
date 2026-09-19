import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmqiz0x_p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rmqiz0x_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dot-net-outlined"} {...others} />);
}

export default Component;
