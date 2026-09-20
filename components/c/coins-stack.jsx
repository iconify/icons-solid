import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e4e68db5x.css';
import '../../css/n/nogaozbzm.css';
import '../../css/v/vs3dlvbrf.css';
import '../../css/a/a9ojdth1m.css';
import '../../css/d/dzm-twbwr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e4e68db5x"/><path class="nogaozbzm"/><path class="vs3dlvbrf"/><path class="a9ojdth1m"/><path class="dzm-twbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:coins-stack"} {...others} />);
}

export default Component;
