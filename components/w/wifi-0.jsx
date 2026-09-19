import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0tzxv7_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0tzxv7_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wifi-0"} {...others} />);
}

export default Component;
