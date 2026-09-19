import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/garwd4hif.css';
import '../../css/d/d0gmrybii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="garwd4hif"/><path class="d0gmrybii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:restructuredtext"} {...others} />);
}

export default Component;
