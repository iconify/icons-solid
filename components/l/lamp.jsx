import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f7r14jrkz.css';
import '../../css/n/nrz23rewk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="f7r14jrkz"/><path class="nrz23rewk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:lamp"} {...others} />);
}

export default Component;
