import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdy0nht3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdy0nht3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:microphone-outline"} {...others} />);
}

export default Component;
