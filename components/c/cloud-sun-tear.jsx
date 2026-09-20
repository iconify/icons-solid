import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th7z8fm7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="th7z8fm7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:cloud-sun-tear"} {...others} />);
}

export default Component;
