import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt4a0s1ni.css';
import '../../css/y/yedu7zb9a.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="mt4a0s1ni"/><path class="yedu7zb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-interpreter-services"} {...others} />);
}

export default Component;
