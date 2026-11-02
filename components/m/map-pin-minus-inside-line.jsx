import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_ej_g2mk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_ej_g2mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:map-pin-minus-inside-line"} {...others} />);
}

export default Component;
