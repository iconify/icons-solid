import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3bzb714c.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n3bzb714c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:send-outlined"} {...others} />);
}

export default Component;
