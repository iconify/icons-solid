import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hed017b-p.css';
import '../../css/i/ips52oqxj.css';
import '../../css/z/z2y94ybop.css';
import '../../css/q/qpw4wpbec.css';
import '../../css/s/s77ozzd2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hed017b-p wm-k"/><path class="ips52oqxj wm-k"/><path class="wm-k z2y94ybop"/><path class="qpw4wpbec wm-shine"/><path class="s77ozzd2d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:map-pin-check"} {...others} />);
}

export default Component;
