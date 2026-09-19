import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-bf3xbdx.css';
import '../../css/z/zmolltb3u.css';
import '../../css/a/a_mixmbdb.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="z-bf3xbdx"/><path class="zmolltb3u"/><path class="a_mixmbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:es-pv-4x3"} {...others} />);
}

export default Component;
