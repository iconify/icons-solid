import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9zt39bkn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a9zt39bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:double-vertical-bar"} {...others} />);
}

export default Component;
