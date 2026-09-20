import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/m/mdeshf6to.css';
import '../../css/k/kukmvbbos.css';
import '../../css/t/tgob_1bep.css';
import '../../css/u/uqcqsh33i.css';
import '../../css/j/ja5fcprbs.css';
import '../../css/p/pzyxx4bhb.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="mdeshf6to"/><path class="kukmvbbos"/><path class="tgob_1bep"/><path class="uqcqsh33i"/><path class="ja5fcprbs"/><path class="pzyxx4bhb"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:castile-la-mancha-flag"} {...others} />);
}

export default Component;
