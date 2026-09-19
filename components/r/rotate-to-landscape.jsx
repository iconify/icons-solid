import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jewwt-x9z.css';
import '../../css/j/j02m59mzy.css';
import '../../css/c/cy0djhbhr.css';
import '../../css/h/htogyc_on.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jewwt-x9z"/><path class="j02m59mzy"/><path class="cy0djhbhr"/><path class="htogyc_on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:rotate-to-landscape"} {...others} />);
}

export default Component;
