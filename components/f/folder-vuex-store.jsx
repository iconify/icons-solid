import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufv-l2b0j.css';
import '../../css/n/nu_6q77ce.css';
import '../../css/n/nrcaqmbsk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ufv-l2b0j"/><path class="nu_6q77ce"/><path class="nrcaqmbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-vuex-store"} {...others} />);
}

export default Component;
