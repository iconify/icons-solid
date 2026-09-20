import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k64kp_bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k64kp_bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-colour-text"} {...others} />);
}

export default Component;
