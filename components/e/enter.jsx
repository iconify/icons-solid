import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3ww7tbvo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f3ww7tbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:enter"} {...others} />);
}

export default Component;
