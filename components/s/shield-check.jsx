import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_e1699uz.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="c_e1699uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:shield-check"} {...others} />);
}

export default Component;
