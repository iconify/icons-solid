import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-2gk41ln.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s-2gk41ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:reddit-circle"} {...others} />);
}

export default Component;
