import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asb-_0zbx.css';
import '../../css/m/m37_gnbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asb-_0zbx"/><path class="m37_gnbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:log-out-circle"} {...others} />);
}

export default Component;
