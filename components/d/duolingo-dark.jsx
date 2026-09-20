import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioj85kbhm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ioj85kbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:duolingo-dark"} {...others} />);
}

export default Component;
