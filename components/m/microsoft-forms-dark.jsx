import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz_svobux.css';
import '../../css/h/h6ro5gj3z.css';
import '../../css/m/mmux6pkuu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wz_svobux"/><path class="h6ro5gj3z"/><path class="mmux6pkuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-dark"} {...others} />);
}

export default Component;
