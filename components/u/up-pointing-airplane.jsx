import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-f4bv3pj.css';
import '../../css/s/sunwu9bsd.css';
import '../../css/f/fj5ngibig.css';
import '../../css/n/nnb6rcb4d.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/g/g7asqnu7b.css';
import '../../css/d/dn0cr3lwj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y-f4bv3pj"/><path class="sunwu9bsd"/><path class="fj5ngibig"/><path class="nnb6rcb4d"/><g class="sxsjrzbyv"><path class="g7asqnu7b"/><path class="dn0cr3lwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-pointing-airplane"} {...others} />);
}

export default Component;
