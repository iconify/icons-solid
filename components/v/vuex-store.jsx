import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kionsguxs.css';
import '../../css/e/e1v-2sbam.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kionsguxs"/><path class="e1v-2sbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vuex-store"} {...others} />);
}

export default Component;
