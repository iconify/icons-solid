import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrac4jb6o.css';
import '../../css/l/lbx2im02e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wrac4jb6o"/><path class="lbx2im02e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:edit-outline"} {...others} />);
}

export default Component;
