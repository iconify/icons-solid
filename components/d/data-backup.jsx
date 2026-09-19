import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg1--abbd.css';
import '../../css/z/zudizmbbe.css';
import '../../css/w/w9b1o0b9t.css';
import '../../css/a/a5k16ccib.css';
import '../../css/p/pxav1kb_r.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="dg1--abbd"/><circle class="zudizmbbe"/><circle class="w9b1o0b9t"/><path class="a5k16ccib"/><path class="pxav1kb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-backup"} {...others} />);
}

export default Component;
