import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds65t-b6x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ds65t-b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:video-player"} {...others} />);
}

export default Component;
