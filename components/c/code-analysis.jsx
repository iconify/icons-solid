import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_3ueabf.css';
import '../../css/p/p4jp_qb4m.css';
import '../../css/x/x69qajbhd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jw_3ueabf"/><path class="p4jp_qb4m"/><path class="x69qajbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-analysis"} {...others} />);
}

export default Component;
