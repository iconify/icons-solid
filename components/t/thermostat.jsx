import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq7xt_-ek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iq7xt_-ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:thermostat"} {...others} />);
}

export default Component;
