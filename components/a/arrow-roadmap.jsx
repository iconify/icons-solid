import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icdz3ibjt.css';
import '../../css/j/jb1668bop.css';
import '../../css/r/r9jkfykpa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="icdz3ibjt"/><path class="jb1668bop"/><path class="r9jkfykpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-roadmap"} {...others} />);
}

export default Component;
