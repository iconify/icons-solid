import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg9lfnydf.css';
import '../../css/r/rhgwvr7wa.css';
import '../../css/d/dfzm3rbxk.css';
import '../../css/v/v2asc2b4v.css';
import '../../css/p/pkenwmbcf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fzsas0bek.css';
import '../../css/c/c708mabwa.css';
import '../../css/k/kfoa7bclx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cg9lfnydf"/><path class="rhgwvr7wa"/><path class="dfzm3rbxk"/><path class="v2asc2b4v"/><path class="pkenwmbcf"/><g class="jn8qy4bru"><path class="fzsas0bek"/><path class="c708mabwa"/><path class="kfoa7bclx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:palm-tree"} {...others} />);
}

export default Component;
