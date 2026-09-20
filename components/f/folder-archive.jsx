import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-c7f4bry.css';
import '../../css/u/un_5q0boj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s-c7f4bry"/><path class="un_5q0boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-archive"} {...others} />);
}

export default Component;
