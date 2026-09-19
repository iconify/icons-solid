import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/web3leb9e.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="web3leb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-square-for-stop-filled"} {...others} />);
}

export default Component;
