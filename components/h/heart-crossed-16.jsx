import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm3r0-bhi.css';
import '../../css/p/pyjnocccs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wm3r0-bhi"/><path clip-rule="evenodd" class="pyjnocccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:heart-crossed-16"} {...others} />);
}

export default Component;
