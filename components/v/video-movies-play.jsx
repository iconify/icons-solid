import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diklabb7e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="diklabb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-play"} {...others} />);
}

export default Component;
