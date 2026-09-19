import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm4_r2bnh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="dm4_r2bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:experiment"} {...others} />);
}

export default Component;
