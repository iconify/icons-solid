import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngr6tjb2e.css';
import '../../css/z/zq4blkbef.css';
import '../../css/c/cvn7-9z7p.css';
import '../../css/w/w23h4dbcg.css';
import '../../css/f/fgyn_gjnl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/b0pk54hcs.css';
import '../../css/o/otd37y8rl.css';
import '../../css/b/b_84chben.css';
import '../../css/w/wr8ah6h1y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ngr6tjb2e"/><circle class="zq4blkbef"/><path class="cvn7-9z7p"/><path class="w23h4dbcg"/><path class="fgyn_gjnl"/><g class="jn8qy4bru"><path class="b0pk54hcs"/><circle class="otd37y8rl"/><circle class="b_84chben"/><path class="wr8ah6h1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:camera"} {...others} />);
}

export default Component;
