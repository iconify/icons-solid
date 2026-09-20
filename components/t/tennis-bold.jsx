import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avz07eylb.css';
import '../../css/b/b0bb4sbnm.css';
import '../../css/p/plmlc6b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="avz07eylb"/><path class="b0bb4sbnm"/><path class="plmlc6b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tennis-bold"} {...others} />);
}

export default Component;
