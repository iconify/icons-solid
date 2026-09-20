import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7w11bbww.css';
import '../../css/n/n0i6_ooxq.css';
import '../../css/w/w652dl6zr.css';

const viewBox = {"width":256,"height":293};
const content = `<path class="j7w11bbww"/><path class="n0i6_ooxq"/><path class="w652dl6zr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:builder"} {...others} />);
}

export default Component;
