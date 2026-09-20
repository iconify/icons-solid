import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kthzltihc.css';
import '../../css/b/booukknpa.css';
import '../../css/r/rhzrc5odf.css';
import '../../css/z/z6fxgmbeq.css';
import '../../css/j/jl8p0tbif.css';
import '../../css/x/xfdg-pm6t.css';
import '../../css/e/ebaznsbew.css';
import '../../css/w/wiumzjbac.css';
import '../../css/f/frjdu5bwz.css';
import '../../css/d/d1lwr-c4s.css';
import '../../css/c/cgnc-p0pf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kthzltihc"/><path class="booukknpa"/><path class="rhzrc5odf"/><rect transform="matrix(-1 0 0 -1 71.888 95.227)" class="z6fxgmbeq"/><path class="jl8p0tbif"/><path class="xfdg-pm6t"/><path class="ebaznsbew"/><path class="wiumzjbac"/><rect transform="rotate(90 57.158 28.323)" class="frjdu5bwz"/><path class="d1lwr-c4s"/><rect transform="rotate(90 14.39 28.323)" class="cgnc-p0pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:oncoming-fire-engine"} {...others} />);
}

export default Component;
