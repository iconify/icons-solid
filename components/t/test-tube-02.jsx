import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qfb1j-pzk.css';
import '../../css/a/aejuevymk.css';
import '../../css/m/mxe8hzr6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qfb1j-pzk"/><path class="aejuevymk"/><path class="mxe8hzr6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:test-tube-02"} {...others} />);
}

export default Component;
