import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ihx13lw_h.css';
import '../../css/f/f2oh-bcek.css';
import '../../css/s/spz57yl-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ihx13lw_h"/><path class="f2oh-bcek"/><path class="spz57yl-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:eeg"} {...others} />);
}

export default Component;
