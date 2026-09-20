import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwr-4osjt.css';
import '../../css/i/ikb-nb4ol.css';
import '../../css/o/osug8046v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="iwr-4osjt"/><path class="ikb-nb4ol"/><path class="osug8046v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:file-code-1"} {...others} />);
}

export default Component;
