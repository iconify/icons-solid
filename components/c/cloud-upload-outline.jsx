import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk_r9ibjr.css';
import '../../css/v/vj58-bbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jk_r9ibjr"/><path class="vj58-bbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-upload-outline"} {...others} />);
}

export default Component;
