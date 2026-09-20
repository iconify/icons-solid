import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_t41-uxm.css';
import '../../css/q/qpkn_bweo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g_t41-uxm"/><path class="qpkn_bweo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-shader"} {...others} />);
}

export default Component;
