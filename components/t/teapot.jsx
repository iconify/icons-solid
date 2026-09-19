import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2uq7ybfo.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="a2uq7ybfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:teapot"} {...others} />);
}

export default Component;
