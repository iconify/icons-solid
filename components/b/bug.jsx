import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/twy02ghvq.css';
import '../../css/m/mgs42q36i.css';
import '../../css/g/g4dwrabvb.css';
import '../../css/p/pwqzqsbla.css';
import '../../css/h/ha5c3ebcy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="twy02ghvq"/><path class="mgs42q36i"/><path class="g4dwrabvb"/><path class="pwqzqsbla"/><path class="ha5c3ebcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bug"} {...others} />);
}

export default Component;
