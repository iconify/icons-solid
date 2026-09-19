import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc9eee9iy.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/b/bzxihy2ah.css';
import '../../css/s/sk39cdt4n.css';
import '../../css/i/iwxwsacaj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uc9eee9iy"/><path class="q6u6gfbgw"/><rect class="bzxihy2ah"/><path class="sk39cdt4n"/><path class="iwxwsacaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:locking-picture"} {...others} />);
}

export default Component;
