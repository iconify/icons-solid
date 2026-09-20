import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipgay6bzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ipgay6bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cigarette"} {...others} />);
}

export default Component;
