import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbiz79bon.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jbiz79bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:assembly-hitachi"} {...others} />);
}

export default Component;
