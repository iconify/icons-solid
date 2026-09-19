import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anhzowk-q.css';
import '../../css/x/xusvasb8p.css';
import '../../css/k/k2sbiccsu.css';
import '../../css/k/kmv9ffktl.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="anhzowk-q"/><path clip-rule="evenodd" class="xusvasb8p"/><path clip-rule="evenodd" class="k2sbiccsu"/><path clip-rule="evenodd" class="kmv9ffktl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:shield"} {...others} />);
}

export default Component;
