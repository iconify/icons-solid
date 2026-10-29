import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gg9qschrj.css';
import '../../css/w/w3qnxqbjy.css';
import '../../css/t/tjbgnmb3g.css';
import '../../css/o/oum2fkb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gg9qschrj"/><path class="w3qnxqbjy wm-a"/><path class="tjbgnmb3g"/><path class="oum2fkb0t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skull-duo"} {...others} />);
}

export default Component;
