import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdvk-d6wd.css';
import '../../css/x/xplmzjmbs.css';
import '../../css/e/e12p8hb9v.css';
import '../../css/a/ax8o968nq.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="gdvk-d6wd"><ellipse class="xplmzjmbs"/><path class="e12p8hb9v"/><path class="ax8o968nq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:server-outline"} {...others} />);
}

export default Component;
