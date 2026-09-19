import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lym7mzbqm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lym7mzbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:video-camera"} {...others} />);
}

export default Component;
