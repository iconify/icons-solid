import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0acr7bah.css';
import '../../css/t/tbb80abuh.css';
import '../../css/m/mxcdsenuw.css';
import '../../css/v/vvdxlzbsp.css';
import '../../css/x/xdtq7lbuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e0acr7bah"/><path class="tbb80abuh"/><path class="mxcdsenuw"/><path class="vvdxlzbsp"/><path class="xdtq7lbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-apk"} {...others} />);
}

export default Component;
