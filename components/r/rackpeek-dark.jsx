import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6msedb6h.css';
import '../../css/n/nnk71vbdc.css';
import '../../css/k/k-v2ul_kt.css';
import '../../css/i/it9nf6esa.css';
import '../../css/i/izx10zobu.css';
import '../../css/g/g_z4tpb-l.css';
import '../../css/x/xsz2__blu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6msedb6h"/><path class="nnk71vbdc"/><path class="k-v2ul_kt"/><path class="it9nf6esa"/><path class="izx10zobu"/><path class="g_z4tpb-l"/><path class="xsz2__blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpeek-dark"} {...others} />);
}

export default Component;
