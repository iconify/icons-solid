import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-77igb4q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="c-77igb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dribbble-square-outlined"} {...others} />);
}

export default Component;
