import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2pozx63e.css';
import '../../css/w/wt91hgbmz.css';
import '../../css/w/w0ih7xbry.css';
import '../../css/o/oint8ybme.css';
import '../../css/o/ohh-8ubbs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p2pozx63e"/><path class="wt91hgbmz"/><path class="w0ih7xbry"/><path class="oint8ybme"/><path class="ohh-8ubbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:office-building-1"} {...others} />);
}

export default Component;
