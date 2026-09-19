import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1i7d-1da.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x1i7d-1da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:message-filled"} {...others} />);
}

export default Component;
