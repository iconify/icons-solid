import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5xxn-bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5xxn-bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dollar-sign"} {...others} />);
}

export default Component;
