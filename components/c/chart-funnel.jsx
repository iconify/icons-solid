import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b6aghm9bs.css';
import '../../css/z/zbonqtbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b6aghm9bs"/><path class="zbonqtbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-funnel"} {...others} />);
}

export default Component;
