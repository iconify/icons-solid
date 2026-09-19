import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oal3nmb3w.css';
import '../../css/y/ytfczk__j.css';
import '../../css/w/wwbe5-b4m.css';
import '../../css/x/x1ea6xf3p.css';

const viewBox = {"width":301,"height":259};
const content = `<g class="ft5dv1b6b"><path class="oal3nmb3w"/><path class="ytfczk__j"/><path class="wwbe5-b4m"/><circle class="x1ea6xf3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ne"} {...others} />);
}

export default Component;
