import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zip20upao.css';
import '../../css/b/b4jm4y-yv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zip20upao"/><path class="b4jm4y-yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:reading"} {...others} />);
}

export default Component;
