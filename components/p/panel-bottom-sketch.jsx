import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i6x_spqod.css';
import '../../css/a/ar8a0cboq.css';
import '../../css/k/kmspi9b9w.css';
import '../../css/i/i__yerbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i6x_spqod"/><path class="ar8a0cboq wm-k"/><path class="kmspi9b9w wm-k"/><path class="i__yerbdi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-bottom-sketch"} {...others} />);
}

export default Component;
