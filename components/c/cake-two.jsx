import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/i/ih_4ne4_y.css';
import '../../css/v/v8blxvper.css';
import '../../css/t/tjvl0_bwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ih_4ne4_y"/><path class="v8blxvper"/><path class="tjvl0_bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cake-two"} {...others} />);
}

export default Component;
