import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw7ettbfa.css';
import '../../css/a/ajbmdq31u.css';
import '../../css/r/rhu79l3wu.css';
import '../../css/f/frqh28bzz.css';
import '../../css/p/prhbcdc5f.css';
import '../../css/c/c2ry9pert.css';
import '../../css/s/sru6yy4ha.css';
import '../../css/t/tsrhj4i9b.css';
import '../../css/j/j-tes_b8m.css';

const viewBox = {"width":300,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qw7ettbfa"/><path class="ajbmdq31u"/><path class="rhu79l3wu"/><path class="frqh28bzz"/><path class="prhbcdc5f"/><path class="c2ry9pert"/><path class="sru6yy4ha"/><path class="tsrhj4i9b"/><path class="j-tes_b8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:si"} {...others} />);
}

export default Component;
