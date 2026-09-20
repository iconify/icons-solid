import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqgkd6bzu.css';
import '../../css/s/sfxmahbnd.css';
import '../../css/q/q2-uphbzn.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="vqgkd6bzu"/><path clip-rule="evenodd" class="sfxmahbnd"/><path class="q2-uphbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sun-1"} {...others} />);
}

export default Component;
