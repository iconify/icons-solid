import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca-e6y59q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ca-e6y59q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:transaction-outline"} {...others} />);
}

export default Component;
