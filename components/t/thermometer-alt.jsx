import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roqo4bagl.css';
import '../../css/d/d9--onbip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="roqo4bagl"/><path class="d9--onbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:thermometer-alt"} {...others} />);
}

export default Component;
