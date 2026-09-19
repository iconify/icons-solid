import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vhoslxfon.css';
import '../../css/s/sul83f9ve.css';
import '../../css/o/obbrti2nr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="vhoslxfon"/><path class="sul83f9ve"/><path class="obbrti2nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clear-format"} {...others} />);
}

export default Component;
