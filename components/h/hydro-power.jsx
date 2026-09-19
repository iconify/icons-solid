import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mdy21e-7t.css';
import '../../css/c/cnn-k95xm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mdy21e-7t"/><path class="cnn-k95xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hydro-power"} {...others} />);
}

export default Component;
