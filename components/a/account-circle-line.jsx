import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnmvl1dlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnmvl1dlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:account-circle-line"} {...others} />);
}

export default Component;
