import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-c_r3bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l-c_r3bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:forward-circle"} {...others} />);
}

export default Component;
