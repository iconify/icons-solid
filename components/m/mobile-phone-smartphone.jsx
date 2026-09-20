import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylhh2hb1h.css';
import '../../css/l/l3bahwf0v.css';
import '../../css/v/vf_7ex6uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylhh2hb1h"/><path class="l3bahwf0v"/><path class="vf_7ex6uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mobile-phone-smartphone"} {...others} />);
}

export default Component;
