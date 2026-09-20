import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdqexiblm.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="vdqexiblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:axis-positioning"} {...others} />);
}

export default Component;
