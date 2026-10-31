import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/z/zzq8gronk.css';
import '../../css/r/ricbakr0q.css';
import '../../css/c/ck74n8tck.css';
import '../../css/z/zyxi9sbwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="zzq8gronk"/><path class="ricbakr0q"/><path class="ck74n8tck"/><path class="zyxi9sbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:beach-2-pop"} {...others} />);
}

export default Component;
