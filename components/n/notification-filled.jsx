import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya9h86b_d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ya9h86b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:notification-filled"} {...others} />);
}

export default Component;
