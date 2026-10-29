import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vub7g5blo.css';
import '../../css/o/oxal30bwl.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vub7g5blo wm-k"/><path class="oxal30bwl wm-k"/><path class="foipgeybq wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-off"} {...others} />);
}

export default Component;
