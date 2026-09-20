import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p79utxbni.css';
import '../../css/r/rdx-p93ra.css';
import '../../css/q/qfm6-3b6g.css';
import '../../css/a/aqxt0z01y.css';
import '../../css/q/qsmtpjw-h.css';
import '../../css/s/sdc1v3s9e.css';
import '../../css/a/a2wcewbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p79utxbni"/><path class="rdx-p93ra"/><path class="qfm6-3b6g"/><path class="aqxt0z01y"/><path class="qsmtpjw-h"/><path class="sdc1v3s9e"/><path class="a2wcewbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:zip-file-compress"} {...others} />);
}

export default Component;
