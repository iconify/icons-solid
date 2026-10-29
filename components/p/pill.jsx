import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onunn3b1o.css';
import '../../css/k/kczulzbfo.css';
import '../../css/m/megqa2biw.css';
import '../../css/o/ovx6b7bpd.css';
import '../../css/k/k7arxs0xi.css';
import '../../css/l/lt0gry96c.css';
import '../../css/i/iyj0i0bpb.css';
import '../../css/g/gi-xp0b2m.css';
import '../../css/m/moft9ac3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onunn3b1o wm-shadow"/><path class="kczulzbfo wm-k"/><path class="megqa2biw wm-k"/><path class="ovx6b7bpd wm-k"/><path class="k7arxs0xi wm-k"/><path class="lt0gry96c wm-k"/><path class="iyj0i0bpb wm-shine"/><path class="gi-xp0b2m wm-a"/><path class="moft9ac3i wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pill"} {...others} />);
}

export default Component;
