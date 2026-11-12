import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y--ny7bfs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y--ny7bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ejabberd-light"} {...others} />);
}

export default Component;
