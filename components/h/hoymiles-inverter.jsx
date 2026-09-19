import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg2zhxvfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg2zhxvfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hoymiles-inverter"} {...others} />);
}

export default Component;
