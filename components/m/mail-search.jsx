import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qq6v5xtsb.css';
import '../../css/f/f2hhzucew.css';
import '../../css/u/u-2j45bbr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qq6v5xtsb"/><path class="f2hhzucew"/><path class="u-2j45bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-search"} {...others} />);
}

export default Component;
