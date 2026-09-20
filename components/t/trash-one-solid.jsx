import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr9-5dbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qr9-5dbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:trash-one-solid"} {...others} />);
}

export default Component;
