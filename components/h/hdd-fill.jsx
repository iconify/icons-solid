import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly_u-9biw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ly_u-9biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:hdd-fill"} {...others} />);
}

export default Component;
