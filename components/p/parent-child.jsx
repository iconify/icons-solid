import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvbv01bcc.css';
import '../../css/h/hbahfflyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvbv01bcc"/><path class="hbahfflyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:parent-child"} {...others} />);
}

export default Component;
