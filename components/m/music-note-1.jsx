import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj0an3bgo.css';
import '../../css/m/mjrq3v7lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj0an3bgo"/><path class="mjrq3v7lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:music-note-1"} {...others} />);
}

export default Component;
