import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp-eqwb-s.css';
import '../../css/g/g3banh52s.css';
import '../../css/j/jn-l27cew.css';
import '../../css/c/cu3r39b7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rp-eqwb-s"/><path class="g3banh52s"/><path class="jn-l27cew"/><path class="cu3r39b7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-1"} {...others} />);
}

export default Component;
