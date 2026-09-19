import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x835o2f1u.css';
import '../../css/j/jl-zrjbno.css';
import '../../css/n/n7z7pvbdg.css';
import '../../css/j/jcbye5a4i.css';
import '../../css/v/vgr8jobfl.css';
import '../../css/n/ns6dr1bjc.css';
import '../../css/a/a2cql1bmq.css';
import '../../css/n/n40vplb7k.css';
import '../../css/c/cpkwpkm9q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x835o2f1u"/><path class="jl-zrjbno"/><path class="n7z7pvbdg"/><path class="jcbye5a4i"/><path class="vgr8jobfl"/><path class="ns6dr1bjc"/><path class="a2cql1bmq"/><path class="n40vplb7k"/><path class="cpkwpkm9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:dicom-6000"} {...others} />);
}

export default Component;
