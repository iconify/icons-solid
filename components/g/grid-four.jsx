import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ecj5zxb4g.css';
import '../../css/t/tjp9mn54t.css';
import '../../css/z/z-4z5xbxi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ecj5zxb4g"/><path class="tjp9mn54t"/><path class="z-4z5xbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grid-four"} {...others} />);
}

export default Component;
