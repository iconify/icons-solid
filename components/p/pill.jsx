import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n5b6d7kkn.css';
import '../../css/x/x0u7kqb3z.css';
import '../../css/t/tkbq11xod.css';
import '../../css/z/zhncchbqm.css';
import '../../css/v/vbxqvybli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n5b6d7kkn wm-shadow"/><path class="x0u7kqb3z"/><path class="tkbq11xod"/><path class="zhncchbqm"/><path class="vbxqvybli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pill"} {...others} />);
}

export default Component;
