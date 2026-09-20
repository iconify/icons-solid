import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9nflpb5z.css';
import '../../css/z/zr6ckqbjg.css';
import '../../css/y/y-ym3ibmz.css';
import '../../css/w/w---8vbga.css';
import '../../css/l/leg7_wbus.css';
import '../../css/u/usjeh1bwt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hdaszwb3b.css';
import '../../css/p/p65g7fcod.css';
import '../../css/b/bzpzn1knp.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="w9nflpb5z"/><path class="zr6ckqbjg"/><path class="y-ym3ibmz"/><path class="w---8vbga"/><path class="leg7_wbus"/><path class="usjeh1bwt"/><g class="jn8qy4bru"><path class="hdaszwb3b"/><path class="p65g7fcod"/><path class="bzpzn1knp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stuffed-flatbread"} {...others} />);
}

export default Component;
