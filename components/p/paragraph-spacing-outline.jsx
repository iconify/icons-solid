import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agxbu6-zp.css';
import '../../css/x/xws3dub0q.css';
import '../../css/g/gyqo3zbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="agxbu6-zp"/><path class="xws3dub0q"/><path class="gyqo3zbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-outline"} {...others} />);
}

export default Component;
