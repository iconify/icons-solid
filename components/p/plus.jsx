import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7zs8cblv.css';
import '../../css/p/p8zognblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7zs8cblv"/><path class="p8zognblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plus"} {...others} />);
}

export default Component;
