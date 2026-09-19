import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c712vub3z.css';
import '../../css/v/vu_cilbnj.css';
import '../../css/c/cuea6kgcd.css';
import '../../css/o/oa32udbet.css';
import '../../css/i/iohv6bc-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c712vub3z"/><path class="vu_cilbnj"/><path class="cuea6kgcd"/><path class="oa32udbet"/><path class="oa32udbet"/><path class="iohv6bc-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:color-card"} {...others} />);
}

export default Component;
