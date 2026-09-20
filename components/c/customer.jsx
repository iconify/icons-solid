import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7tkv1bci.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="n7tkv1bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:customer"} {...others} />);
}

export default Component;
