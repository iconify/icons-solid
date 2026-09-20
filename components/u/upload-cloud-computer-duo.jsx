import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/h/hv7m9kkjg.css';
import '../../css/p/pir-ycgkc.css';
import '../../css/q/q9f3dpv9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="hv7m9kkjg"/><path class="pir-ycgkc"/><path class="q9f3dpv9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:upload-cloud-computer-duo"} {...others} />);
}

export default Component;
