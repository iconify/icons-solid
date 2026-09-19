import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u00_-mbkz.css';
import '../../css/j/j5ih9_brb.css';
import '../../css/x/xl1le1b0a.css';
import '../../css/t/tn0uqua-i.css';
import '../../css/m/mb_v4h7li.css';
import '../../css/t/td15xcbkk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="u00_-mbkz"/><circle class="j5ih9_brb"/><circle class="xl1le1b0a"/><circle class="tn0uqua-i"/><circle class="mb_v4h7li"/><path class="td15xcbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hdd"} {...others} />);
}

export default Component;
