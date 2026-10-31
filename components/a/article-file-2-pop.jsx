import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/q/q1jda8bys.css';
import '../../css/t/tjdjewb6v.css';
import '../../css/p/p0tgu9bvr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="q1jda8bys"/><path class="tjdjewb6v"/><path class="p0tgu9bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:article-file-2-pop"} {...others} />);
}

export default Component;
