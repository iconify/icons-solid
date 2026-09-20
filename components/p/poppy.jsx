import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3w7xo-ak.css';
import '../../css/b/bbprkmvye.css';
import '../../css/e/ehpzsf21u.css';
import '../../css/z/zwakmqbcg.css';
import '../../css/q/qoau1ybhj.css';
import '../../css/z/z-a8z-mhe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="j3w7xo-ak"/><path class="bbprkmvye"/><ellipse transform="rotate(-24.119)" class="ehpzsf21u"/><path class="zwakmqbcg"/><path class="qoau1ybhj"/><path class="z-a8z-mhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:poppy"} {...others} />);
}

export default Component;
