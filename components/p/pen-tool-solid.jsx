import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o3aj0cbjz.css';
import '../../css/j/jlmi4obss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="o3aj0cbjz"/><path class="jlmi4obss wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-tool-solid"} {...others} />);
}

export default Component;
