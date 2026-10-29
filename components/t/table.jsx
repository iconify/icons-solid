import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7zgibcup.css';
import '../../css/i/ing741b7b.css';
import '../../css/a/a6tz7mxzf.css';
import '../../css/n/n_c-2kjwv.css';
import '../../css/a/ao-tzccan.css';
import '../../css/s/sdn8pc-iw.css';
import '../../css/g/g6f648bbc.css';
import '../../css/f/f-z32ebfm.css';
import '../../css/f/fifw_um5n.css';
import '../../css/a/anel5jbxb.css';
import '../../css/n/nykxdxbek.css';
import '../../css/b/b-cqmrbtm.css';
import '../../css/z/z3k8eoehz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7zgibcup wm-shadow"/><path class="ing741b7b wm-k"/><path class="a6tz7mxzf wm-k"/><path class="n_c-2kjwv wm-k"/><path class="ao-tzccan wm-k"/><path class="sdn8pc-iw wm-k"/><path class="g6f648bbc wm-shine"/><path class="f-z32ebfm wm-k"/><path class="fifw_um5n wm-k"/><path class="anel5jbxb wm-k"/><path class="nykxdxbek wm-k"/><path class="b-cqmrbtm wm-k"/><path class="wm-k z3k8eoehz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:table"} {...others} />);
}

export default Component;
