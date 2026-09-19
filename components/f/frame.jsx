import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6hhcjbid.css';
import '../../css/r/ryyiu8v4m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w6hhcjbid"/><path class="ryyiu8v4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:frame"} {...others} />);
}

export default Component;
