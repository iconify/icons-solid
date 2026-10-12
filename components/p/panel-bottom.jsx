import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0gwmtuhx.css';
import '../../css/m/mzapnymll.css';
import '../../css/b/b4n95wz2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 21.25 14.65)" class="g0gwmtuhx"/><rect transform="rotate(90 21.25 2.74)" class="mzapnymll"/><path class="b4n95wz2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-bottom"} {...others} />);
}

export default Component;
