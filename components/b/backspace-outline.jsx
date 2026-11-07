import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb-qqv6dc.css';
import '../../css/j/j_2v-fbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hb-qqv6dc"/><path clip-rule="evenodd" class="j_2v-fbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backspace-outline"} {...others} />);
}

export default Component;
