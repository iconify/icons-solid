import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cty9l0r9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cty9l0r9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:mysa-thermostat"} {...others} />);
}

export default Component;
