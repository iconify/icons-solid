import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz8pmwbck.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qz8pmwbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:balls"} {...others} />);
}

export default Component;
