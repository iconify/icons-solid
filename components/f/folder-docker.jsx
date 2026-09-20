import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl0qbld8c.css';
import '../../css/g/gb0t1hblg.css';
import '../../css/v/vtznphkau.css';
import '../../css/v/vz39nxhrf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sl0qbld8c"/><g class="gb0t1hblg"><path class="vtznphkau"/><path class="vz39nxhrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-docker"} {...others} />);
}

export default Component;
