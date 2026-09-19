import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clsdao61r.css';
import '../../css/o/o0bilwbsi.css';
import '../../css/r/rlsf7gb6u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="clsdao61r"><path class="o0bilwbsi"/><path class="rlsf7gb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:groovy"} {...others} />);
}

export default Component;
