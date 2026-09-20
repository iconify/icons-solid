import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_z1w_n4f.css';
import '../../css/w/wasqogmzs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i1bgkow5j.css';
import '../../css/c/cipihpb6g.css';
import '../../css/m/m5ljaxv2d.css';
import '../../css/a/a5wfiacnd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b_z1w_n4f"/><path class="wasqogmzs"/><g class="jn8qy4bru"><path class="i1bgkow5j"/><ellipse class="cipihpb6g"/><ellipse class="m5ljaxv2d"/><path class="a5wfiacnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bandage-scissors"} {...others} />);
}

export default Component;
