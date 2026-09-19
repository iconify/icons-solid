import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld0ypzpmg.css';
import '../../css/h/hag85ey0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ld0ypzpmg"/><path class="hag85ey0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-liquid-drop"} {...others} />);
}

export default Component;
