import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrk-757mf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrk-757mf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:danger-poison"} {...others} />);
}

export default Component;
