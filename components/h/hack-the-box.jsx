import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm59pb2yx.css';

const viewBox = {"width":1024,"height":791.27};
const content = `<path class="rm59pb2yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hack-the-box"} {...others} />);
}

export default Component;
