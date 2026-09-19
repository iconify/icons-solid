import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/css75hbqt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="css75hbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:kodi"} {...others} />);
}

export default Component;
