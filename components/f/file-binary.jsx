import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/la6z8h06d.css';
import '../../css/t/tv9524b-g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="la6z8h06d"/><path class="tv9524b-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:file-binary"} {...others} />);
}

export default Component;
