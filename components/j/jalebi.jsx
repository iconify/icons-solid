import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pqn81ab2l.css';
import '../../css/q/qt3_ghwjq.css';
import '../../css/v/vg2dc9z-o.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pqn81ab2l"/><path class="qt3_ghwjq wm-k"/><path class="vg2dc9z-o wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:jalebi"} {...others} />);
}

export default Component;
