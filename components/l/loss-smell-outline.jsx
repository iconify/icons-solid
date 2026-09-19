import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twawch7sq.css';
import '../../css/p/p_aul10jh.css';
import '../../css/q/q-y201bda.css';
import '../../css/t/tguw75yzf.css';
import '../../css/z/zbxjd84dp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twawch7sq"/><path class="p_aul10jh"/><path clip-rule="evenodd" class="q-y201bda"/><path class="tguw75yzf"/><path clip-rule="evenodd" class="zbxjd84dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:loss-smell-outline"} {...others} />);
}

export default Component;
