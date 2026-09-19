import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mz8pfhblh.css';
import '../../css/i/i3m13tbnb.css';
import '../../css/j/jn-_1jb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mz8pfhblh"/><path class="i3m13tbnb"/><path class="jn-_1jb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-love-01"} {...others} />);
}

export default Component;
