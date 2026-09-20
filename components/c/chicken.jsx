import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/l/l9d8_1irv.css';
import '../../css/f/fd9rt0b5x.css';
import '../../css/r/rkteku1vi.css';
import '../../css/q/q7-l6mb8a.css';
import '../../css/w/wtwrn4dsh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="l9d8_1irv"/><path class="fd9rt0b5x"/><path class="rkteku1vi"/><path class="q7-l6mb8a"/><path class="wtwrn4dsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chicken"} {...others} />);
}

export default Component;
