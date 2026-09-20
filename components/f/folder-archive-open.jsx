import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg_cwepzi.css';
import '../../css/u/un_5q0boj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sg_cwepzi"/><path class="un_5q0boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-archive-open"} {...others} />);
}

export default Component;
