import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/s/soqzb4g1r.css';
import '../../css/p/p7nsoob7t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="soqzb4g1r"/><path class="p7nsoob7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:typescript"} {...others} />);
}

export default Component;
