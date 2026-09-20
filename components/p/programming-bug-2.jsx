import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1pr4qb6r.css';
import '../../css/t/t8z8x4bjc.css';
import '../../css/u/upw5_mbar.css';
import '../../css/t/tf5rhmbos.css';
import '../../css/n/nw6tqcbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c1pr4qb6r"/><path class="t8z8x4bjc"/><path class="upw5_mbar"/><path class="tf5rhmbos"/><path class="nw6tqcbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:programming-bug-2"} {...others} />);
}

export default Component;
