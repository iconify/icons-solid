import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shvygbdwd.css';
import '../../css/d/d6niczg_l.css';
import '../../css/z/z3c_x4ivb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="shvygbdwd"/><path class="d6niczg_l"/><path class="z3c_x4ivb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-help-message"} {...others} />);
}

export default Component;
