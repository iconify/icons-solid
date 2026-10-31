import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n65np6ypu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n65np6ypu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hard-hat-round"} {...others} />);
}

export default Component;
