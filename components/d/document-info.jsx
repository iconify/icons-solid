import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abg_9_bhy.css';
import '../../css/j/j6q_paczc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="abg_9_bhy"/><path clip-rule="evenodd" class="j6q_paczc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:document-info"} {...others} />);
}

export default Component;
