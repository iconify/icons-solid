import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do4ne9uns.css';
import '../../css/j/j89f_0dyx.css';
import '../../css/b/b6j267ddl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="do4ne9uns"/><path class="j89f_0dyx"/><path class="b6j267ddl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-branch-20-bold"} {...others} />);
}

export default Component;
