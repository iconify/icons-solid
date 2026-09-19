import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/udloo1-wo.css';
import '../../css/l/l4seu0bbh.css';
import '../../css/y/y-avxdb3w.css';
import '../../css/f/far-3bbrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="udloo1-wo"/><path class="l4seu0bbh"/><path class="y-avxdb3w"/><path class="far-3bbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:helicopter"} {...others} />);
}

export default Component;
