import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhw0htbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhw0htbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-rounded-minus"} {...others} />);
}

export default Component;
