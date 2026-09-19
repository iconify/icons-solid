import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rym86fbok.css';
import '../../css/n/ni4bbebcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rym86fbok"/><path class="ni4bbebcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:modified-date-outlined"} {...others} />);
}

export default Component;
