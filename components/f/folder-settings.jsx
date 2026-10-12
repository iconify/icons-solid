import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znxfnp67b.css';
import '../../css/i/ioma156-h.css';
import '../../css/s/sfrze3jxm.css';
import '../../css/w/w53s2ymyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="znxfnp67b"/><path class="ioma156-h"/><circle transform="rotate(-90 18.97 17.77)" class="sfrze3jxm"/><path class="w53s2ymyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-settings"} {...others} />);
}

export default Component;
