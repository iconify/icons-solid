import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mietpubkr.css';
import '../../css/c/cyjpcvmzc.css';
import '../../css/g/guxsfgqhk.css';
import '../../css/y/yoae2u98l.css';
import '../../css/x/xow6asr3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mietpubkr"/><path class="cyjpcvmzc"/><path class="guxsfgqhk"/><path class="yoae2u98l"/><path class="xow6asr3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chess-one"} {...others} />);
}

export default Component;
