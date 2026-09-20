import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/is-ew9fxx.css';
import '../../css/j/jmo5yobsw.css';
import '../../css/h/h6i5dgw-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="is-ew9fxx"/><path class="jmo5yobsw"/><path class="h6i5dgw-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-three-pin-gear"} {...others} />);
}

export default Component;
