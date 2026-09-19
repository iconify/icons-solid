import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om2mjlg1o.css';
import '../../css/s/smwypsble.css';
import '../../css/m/mw4ytttly.css';
import '../../css/u/urld98l4o.css';
import '../../css/t/tre18buzd.css';
import '../../css/a/aimn0nbnx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="om2mjlg1o"/><path class="smwypsble"/><path clip-rule="evenodd" class="mw4ytttly"/><path class="urld98l4o"/><path class="tre18buzd"/><path clip-rule="evenodd" class="aimn0nbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-rod-outline"} {...others} />);
}

export default Component;
