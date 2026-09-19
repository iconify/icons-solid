import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5gcnxb5z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s5gcnxb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:crown-fill"} {...others} />);
}

export default Component;
