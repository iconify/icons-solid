import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zo0jdhbwq.css';
import '../../css/d/dgi3ajoxw.css';
import '../../css/f/feccq4bff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zo0jdhbwq"/><path class="dgi3ajoxw"/><path class="feccq4bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ipod"} {...others} />);
}

export default Component;
