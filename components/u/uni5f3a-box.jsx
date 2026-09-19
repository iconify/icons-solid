import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdzm7zkpu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wdzm7zkpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:uni5f3a-box"} {...others} />);
}

export default Component;
