import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9x_81bmq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e9x_81bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:loading-3-quarters-outlined"} {...others} />);
}

export default Component;
