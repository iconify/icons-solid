import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fxxjfbcln.css';
import '../../css/l/le_iwvqhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fxxjfbcln"/><path class="le_iwvqhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:recraft"} {...others} />);
}

export default Component;
