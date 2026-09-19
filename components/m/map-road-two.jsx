import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xxbuy0agq.css';
import '../../css/m/m9zi_fbwg.css';
import '../../css/r/rjeel1bkm.css';
import '../../css/k/kaylpt2hq.css';
import '../../css/c/ckaa1qz4k.css';
import '../../css/c/c5v7f1bap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="xxbuy0agq"/><path class="m9zi_fbwg"/><path class="rjeel1bkm"/><path class="kaylpt2hq"/><path class="ckaa1qz4k"/><path class="c5v7f1bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:map-road-two"} {...others} />);
}

export default Component;
