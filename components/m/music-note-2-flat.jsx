import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp9mcwqrd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vp9mcwqrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:music-note-2-flat"} {...others} />);
}

export default Component;
