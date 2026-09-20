import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/e/e5aq3dfjr.css';
import '../../css/a/a1-uegaox.css';
import '../../css/g/gwo9kgbdk.css';
import '../../css/c/cp59l3blv.css';
import '../../css/s/s99g85bwt.css';
import '../../css/m/mbr4pugvm.css';
import '../../css/j/jb807gbgh.css';
import '../../css/n/n-py0qbhq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="e5aq3dfjr"/><path class="a1-uegaox"/><path class="gwo9kgbdk"/><path class="cp59l3blv"/><path class="s99g85bwt"/><path class="mbr4pugvm"/><path class="jb807gbgh"/><path class="n-py0qbhq"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-american-samoa"} {...others} />);
}

export default Component;
