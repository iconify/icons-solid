import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0ctoy-5l.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d0ctoy-5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:usb"} {...others} />);
}

export default Component;
