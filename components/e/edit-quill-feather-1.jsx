import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-108t_vh.css';
import '../../css/o/o7sbf8smt.css';
import '../../css/j/jl4w00c4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-108t_vh"/><path class="o7sbf8smt"/><path class="jl4w00c4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:edit-quill-feather-1"} {...others} />);
}

export default Component;
