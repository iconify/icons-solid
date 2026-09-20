import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rna_0_b1f.css';
import '../../css/q/q6dvizbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="rna_0_b1f"/><path class="q6dvizbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:watch5"} {...others} />);
}

export default Component;
