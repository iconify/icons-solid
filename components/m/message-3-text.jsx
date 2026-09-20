import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxf5f-bxr.css';
import '../../css/j/jb9pwtbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxf5f-bxr"/><path clip-rule="evenodd" class="jb9pwtbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:message-3-text"} {...others} />);
}

export default Component;
