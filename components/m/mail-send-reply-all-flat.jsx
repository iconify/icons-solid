import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/t/t3nax9bpl.css';
import '../../css/f/fonqbuyut.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path class="t3nax9bpl"/><path class="fonqbuyut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-send-reply-all-flat"} {...others} />);
}

export default Component;
