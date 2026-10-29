import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6-i2bxng.css';
import '../../css/f/fputbrbsv.css';
import '../../css/n/nvo8aqz7d.css';
import '../../css/e/es052n9to.css';
import '../../css/t/ti_47mvtt.css';
import '../../css/b/bb8r9ghec.css';
import '../../css/t/t4lacfa-n.css';
import '../../css/r/rz7u6viaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6-i2bxng wm-shadow"/><path class="fputbrbsv wm-k"/><path class="nvo8aqz7d wm-k"/><path class="es052n9to wm-k"/><path class="ti_47mvtt wm-k"/><path class="bb8r9ghec wm-k"/><path class="t4lacfa-n wm-shine"/><path class="rz7u6viaw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:captions"} {...others} />);
}

export default Component;
