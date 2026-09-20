import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct2bdybif.css';
import '../../css/r/rg12uoqrx.css';
import '../../css/e/epgmdebwn.css';
import '../../css/w/wpfuj3b-h.css';
import '../../css/q/qxmw-xbto.css';
import '../../css/o/o4e1t_pcq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ct2bdybif"/><g class="rg12uoqrx"><path class="epgmdebwn"/><path class="wpfuj3b-h"/><path class="qxmw-xbto"/><path class="o4e1t_pcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-react-components"} {...others} />);
}

export default Component;
