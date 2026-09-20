import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6bk53brd.css';
import '../../css/a/ab_ydd6ir.css';

const viewBox = {"width":950,"height":260.203};
const content = `<g class="ft5dv1b6b"><path class="z6bk53brd"/><path class="ab_ydd6ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:reuters"} {...others} />);
}

export default Component;
