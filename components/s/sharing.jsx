import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dgi3ajoxw.css';
import '../../css/r/r860hybaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dgi3ajoxw"/><path class="r860hybaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sharing"} {...others} />);
}

export default Component;
