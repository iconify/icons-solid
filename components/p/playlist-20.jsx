import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2erelhux.css';
import '../../css/r/rs7efhi1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m2erelhux"/><path class="rs7efhi1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:playlist-20"} {...others} />);
}

export default Component;
