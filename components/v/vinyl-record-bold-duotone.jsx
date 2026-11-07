import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b85oo4swx.css';
import '../../css/f/fdq8872og.css';
import '../../css/q/q14qdhbhn.css';
import '../../css/k/kjtd21bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b85oo4swx"/><path class="fdq8872og"/><path class="q14qdhbhn"/><path clip-rule="evenodd" class="kjtd21bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vinyl-record-bold-duotone"} {...others} />);
}

export default Component;
