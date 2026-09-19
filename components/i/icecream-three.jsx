import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/trse952dt.css';
import '../../css/r/rivzxwblk.css';
import '../../css/n/nu4hpabve.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="trse952dt"/><path class="rivzxwblk"/><path class="nu4hpabve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream-three"} {...others} />);
}

export default Component;
