import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/b/b31zzdblj.css';
import '../../css/o/odiqun3ee.css';
import '../../css/j/jyo4hrbyo.css';
import '../../css/v/vvcotmc0j.css';
import '../../css/h/h4se53ozf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="b31zzdblj"/><path class="odiqun3ee"/><path class="jyo4hrbyo"/><path class="vvcotmc0j"/><path class="h4se53ozf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:parking"} {...others} />);
}

export default Component;
