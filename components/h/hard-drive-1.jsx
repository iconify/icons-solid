import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3iqlcrja.css';
import '../../css/y/y44f65b_r.css';
import '../../css/j/jom8f3b7p.css';
import '../../css/o/o8cqc7bfr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g3iqlcrja"/><path class="y44f65b_r"/><path class="jom8f3b7p"/><path class="o8cqc7bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hard-drive-1"} {...others} />);
}

export default Component;
