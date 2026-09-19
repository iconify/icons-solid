import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm8vpmbuj.css';
import '../../css/y/y0l3i_qwp.css';
import '../../css/m/mxgov2bur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bm8vpmbuj"/><path class="y0l3i_qwp"/><circle class="mxgov2bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:cable-release"} {...others} />);
}

export default Component;
