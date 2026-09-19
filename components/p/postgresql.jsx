import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo5lmccvl.css';
import '../../css/p/p54bnaccc.css';
import '../../css/p/px847tbvl.css';
import '../../css/t/txado3aqj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uo5lmccvl"/><path class="p54bnaccc"/><path class="px847tbvl"/><path class="txado3aqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postgresql"} {...others} />);
}

export default Component;
