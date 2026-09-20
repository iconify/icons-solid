import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1-eh7tkj.css';
import '../../css/j/jdu6zub5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1-eh7tkj"/><path clip-rule="evenodd" class="jdu6zub5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:plex"} {...others} />);
}

export default Component;
