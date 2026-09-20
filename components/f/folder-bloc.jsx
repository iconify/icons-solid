import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l47nr7bbh.css';
import '../../css/k/k1skse-0v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="l47nr7bbh"/><path class="k1skse-0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-bloc"} {...others} />);
}

export default Component;
