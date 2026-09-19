import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmt3mh2kt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmt3mh2kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microwave-oven-filled"} {...others} />);
}

export default Component;
