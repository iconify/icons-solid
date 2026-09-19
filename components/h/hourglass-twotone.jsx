import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1k4k4b0q.css';
import '../../css/b/bdgm4mbrh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e1k4k4b0q"/><path class="bdgm4mbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:hourglass-twotone"} {...others} />);
}

export default Component;
