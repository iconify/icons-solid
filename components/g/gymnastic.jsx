import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0tu6zjre.css';
import '../../css/d/d3p2npepl.css';
import '../../css/u/uahprbbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a0tu6zjre"/><path class="d3p2npepl"/><path class="uahprbbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gymnastic"} {...others} />);
}

export default Component;
