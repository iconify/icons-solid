import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eerz48b5q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="eerz48b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:minus-circle-fill"} {...others} />);
}

export default Component;
