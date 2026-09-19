import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7k-jo7nm.css';
import '../../css/o/obxzrfd7q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="v7k-jo7nm"/><path class="obxzrfd7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:plus-outlined"} {...others} />);
}

export default Component;
