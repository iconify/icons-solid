import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8cmkxbuc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g8cmkxbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:linux-outlined"} {...others} />);
}

export default Component;
