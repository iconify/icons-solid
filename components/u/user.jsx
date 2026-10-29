import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4eio9bdz.css';
import '../../css/j/j4xpq6z4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4eio9bdz"/><path class="j4xpq6z4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user"} {...others} />);
}

export default Component;
