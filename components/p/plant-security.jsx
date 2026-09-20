import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nge3vp00y.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="nge3vp00y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:plant-security"} {...others} />);
}

export default Component;
