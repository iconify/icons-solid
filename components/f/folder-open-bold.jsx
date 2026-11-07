import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmlcj5izr.css';
import '../../css/q/qkmo0ac8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmlcj5izr"/><path clip-rule="evenodd" class="qkmo0ac8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-open-bold"} {...others} />);
}

export default Component;
