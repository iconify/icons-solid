import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlx90jb3u.css';
import '../../css/x/x3ekvxvds.css';
import '../../css/e/eo14_jw6u.css';
import '../../css/c/cusbmcc7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlx90jb3u"/><path clip-rule="evenodd" class="x3ekvxvds"/><path class="eo14_jw6u"/><path class="cusbmcc7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
