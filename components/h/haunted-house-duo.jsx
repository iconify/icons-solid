import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lu0_-abyq.css';
import '../../css/q/qqepnqbsa.css';
import '../../css/c/c5doie9nu.css';
import '../../css/x/x87vs2buk.css';
import '../../css/t/tdyvq4bpl.css';
import '../../css/h/hsf36n9ar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lu0_-abyq"/><path class="qqepnqbsa wm-s"/><path class="c5doie9nu wm-s"/><path class="x87vs2buk"/><path class="tdyvq4bpl"/><path class="hsf36n9ar wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:haunted-house-duo"} {...others} />);
}

export default Component;
