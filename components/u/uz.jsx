import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqtgi5jtp.css';
import '../../css/k/k586-sz8b.css';
import '../../css/y/y1cx6ojkh.css';
import '../../css/s/spabn44zw.css';
import '../../css/g/gnlafya-h.css';
import '../../css/k/km7rcob4z.css';
import '../../css/y/y89ppfbxu.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qqtgi5jtp"/><path class="k586-sz8b"/><path class="y1cx6ojkh"/><path class="spabn44zw"/><circle class="gnlafya-h"/><circle class="km7rcob4z"/><path class="y89ppfbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:uz"} {...others} />);
}

export default Component;
