import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx82a3byw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/l/lrokkyjkw.css';
import '../../css/t/tegt7pbvn.css';
import '../../css/i/i2m7w-b1j.css';
import '../../css/b/baor8918z.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="SVG5SN9EXXT" width="49" height="49" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="sx82a3byw"/></mask><g mask="url(#SVG5SN9EXXT)" class="ft5dv1b6b"><path class="vme83ob7i"/><path class="lrokkyjkw"/><path class="tegt7pbvn"/><path class="i2m7w-b1j"/><path class="baor8918z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yin-yang-pop"} {...others} />);
}

export default Component;
