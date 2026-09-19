import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pveucb2ak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pveucb2ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:voicemail"} {...others} />);
}

export default Component;
