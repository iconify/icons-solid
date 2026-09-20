import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imnimkbei.css';
import '../../css/e/ed-8o3t8t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="imnimkbei"/><path class="ed-8o3t8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:play-outline"} {...others} />);
}

export default Component;
