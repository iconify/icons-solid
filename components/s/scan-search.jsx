import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxzl4jb7n.css';
import '../../css/q/qc8cpdrdz.css';
import '../../css/d/dsnjkwazf.css';
import '../../css/o/obm5td8tv.css';
import '../../css/j/jmg37xb5w.css';
import '../../css/k/kiqsqw54h.css';
import '../../css/h/hjk7dbc0f.css';
import '../../css/g/gflattbva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxzl4jb7n wm-shadow"/><path class="qc8cpdrdz wm-k"/><path class="dsnjkwazf wm-k"/><path class="obm5td8tv wm-a"/><path class="jmg37xb5w wm-a"/><path class="kiqsqw54h wm-a"/><path class="hjk7dbc0f wm-a"/><path class="gflattbva wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:scan-search"} {...others} />);
}

export default Component;
