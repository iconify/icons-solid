import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-47hnhjw.css';
import '../../css/c/cx30n8b7z.css';
import '../../css/a/a253p2upt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h-47hnhjw"/><path class="cx30n8b7z"/><path class="a253p2upt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-music-player"} {...others} />);
}

export default Component;
