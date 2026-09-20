import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdk8769xs.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="hdk8769xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:connection-fail"} {...others} />);
}

export default Component;
