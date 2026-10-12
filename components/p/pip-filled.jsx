import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxd3l36lp.css';
import '../../css/e/enpl5eboe.css';
import '../../css/u/u4jl8yfch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mxd3l36lp"/><rect class="enpl5eboe"/><path class="u4jl8yfch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pip-filled"} {...others} />);
}

export default Component;
