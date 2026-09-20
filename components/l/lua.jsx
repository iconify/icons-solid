import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpj0hqbya.css';
import '../../css/s/s81sm_b6x.css';
import '../../css/s/sbpqudbjx.css';
import '../../css/v/vlmn7tbqo.css';
import '../../css/n/ntbk6mbsv.css';

const viewBox = {"width":947,"height":947};
const content = `<path class="lpj0hqbya"/><path class="s81sm_b6x"/><path class="sbpqudbjx"/><path class="vlmn7tbqo"/><path class="ntbk6mbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lua"} {...others} />);
}

export default Component;
