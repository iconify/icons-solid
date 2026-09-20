import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8c084gqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d8c084gqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cloud-network-1"} {...others} />);
}

export default Component;
