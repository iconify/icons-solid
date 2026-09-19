import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xovmwqfiq.css';

const viewBox = {"width":388,"height":512};
const content = `<path class="xovmwqfiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:macaulay2"} {...others} />);
}

export default Component;
