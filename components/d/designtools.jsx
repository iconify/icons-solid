import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lw-gki7ii.css';
import '../../css/b/bb-gp60lh.css';
import '../../css/r/r0csu8bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lw-gki7ii"/><path class="bb-gp60lh"/><path class="r0csu8bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:designtools"} {...others} />);
}

export default Component;
