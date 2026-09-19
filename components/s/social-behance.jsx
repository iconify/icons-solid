import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqs4cdc7m.css';
import '../../css/s/sq7tt6u1i.css';
import '../../css/o/ozlgx6bya.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="jqs4cdc7m"/><path class="sq7tt6u1i"/><path class="ozlgx6bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-behance"} {...others} />);
}

export default Component;
