import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4s7832oy.css';
import '../../css/a/alcoyobza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4s7832oy"/><path clip-rule="evenodd" class="alcoyobza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:toggle-on-outline"} {...others} />);
}

export default Component;
