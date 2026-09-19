import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/a/a_czfdv_k.css';
import '../../css/x/x53l06brl.css';
import '../../css/y/ylv-82lfr.css';
import '../../css/q/qlvkkzb8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="a_czfdv_k"/><path class="x53l06brl"/><path class="ylv-82lfr"/><path class="qlvkkzb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-two"} {...others} />);
}

export default Component;
