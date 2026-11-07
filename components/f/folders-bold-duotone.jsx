import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx9lmrblm.css';
import '../../css/p/p0tpqpbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx9lmrblm"/><path class="p0tpqpbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folders-bold-duotone"} {...others} />);
}

export default Component;
