import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf6-lbcan.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cf6-lbcan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:diagram-module-new"} {...others} />);
}

export default Component;
