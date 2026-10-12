import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/y/y9tcibr9z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="y9tcibr9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-video-20-bold"} {...others} />);
}

export default Component;
