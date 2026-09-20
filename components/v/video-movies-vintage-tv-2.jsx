import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yavgiittq.css';
import '../../css/q/q639kz3pp.css';
import '../../css/u/usgj2obtm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yavgiittq"/><path class="q639kz3pp"/><path class="usgj2obtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-vintage-tv-2"} {...others} />);
}

export default Component;
