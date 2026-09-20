import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/i9vwnpbxp.css';
import '../../css/g/g_3mr1b5p.css';
import '../../css/h/h6-lr7bxj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="i9vwnpbxp"/><path class="g_3mr1b5p"/><path class="h6-lr7bxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:prescription-pills-drugs-healthcare"} {...others} />);
}

export default Component;
