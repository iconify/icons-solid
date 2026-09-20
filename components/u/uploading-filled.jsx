import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb4rv0hxu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jb4rv0hxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:uploading-filled"} {...others} />);
}

export default Component;
