import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5xcwtbtp.css';
import '../../css/d/dq7ui5iby.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5xcwtbtp"/><path class="dq7ui5iby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wattmeter-48-bold"} {...others} />);
}

export default Component;
