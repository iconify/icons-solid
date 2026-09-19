import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clsdao61r.css';
import '../../css/j/j-h21xgaa.css';
import '../../css/o/osrapabyl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="clsdao61r"><path class="j-h21xgaa"/><path class="osrapabyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:gradle"} {...others} />);
}

export default Component;
