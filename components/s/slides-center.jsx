import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lorte5bwd.css';
import '../../css/y/yrjhnkz1w.css';
import '../../css/t/t7hy1nb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.81 20.38)" class="lorte5bwd"/><rect transform="matrix(0 -1 -1 0 18.81 20.38)" class="yrjhnkz1w"/><path class="t7hy1nb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slides-center"} {...others} />);
}

export default Component;
