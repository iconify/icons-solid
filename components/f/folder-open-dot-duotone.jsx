import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx2i-_f1x.css';
import '../../css/j/jmjyizb5w.css';
import '../../css/r/rdu0fobrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yx2i-_f1x"/><path class="jmjyizb5w"/><path class="rdu0fobrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-open-dot-duotone"} {...others} />);
}

export default Component;
