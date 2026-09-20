import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nge32vmzt.css';
import '../../css/n/nic302jho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nge32vmzt"/><path class="nic302jho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:target-light"} {...others} />);
}

export default Component;
