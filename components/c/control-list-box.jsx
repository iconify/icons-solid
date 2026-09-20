import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8sj5ne3r.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="e8sj5ne3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:control-list-box"} {...others} />);
}

export default Component;
