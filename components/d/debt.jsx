import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb624euvv.css';
import '../../css/b/b6zf5vbhp.css';
import '../../css/m/m37grjbgd.css';
import '../../css/z/zbckgbbwa.css';
import '../../css/d/dtaoi8m6p.css';
import '../../css/w/wccxetbke.css';
import '../../css/n/nv9a5vbcu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lb624euvv"/><path class="b6zf5vbhp"/><g class="m37grjbgd"><path class="zbckgbbwa"/><path class="dtaoi8m6p"/></g><circle class="wccxetbke"/><path class="nv9a5vbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:debt"} {...others} />);
}

export default Component;
