import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6o9_ceuz.css';
import '../../css/y/yp64leb0e.css';
import '../../css/x/xqtg35cxk.css';
import '../../css/l/lhb696b2h.css';
import '../../css/m/mahn_1wed.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s6o9_ceuz"/><path class="yp64leb0e"/><path class="xqtg35cxk"/><path class="lhb696b2h"/><path class="mahn_1wed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mammoth"} {...others} />);
}

export default Component;
