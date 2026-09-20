import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aed_zrbyo.css';
import '../../css/k/krcq_5bxx.css';
import '../../css/a/axxv9v49k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="aed_zrbyo"><path class="krcq_5bxx"/><path class="axxv9v49k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:javascript-map"} {...others} />);
}

export default Component;
