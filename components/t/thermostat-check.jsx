import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5f9tlanx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5f9tlanx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:thermostat-check"} {...others} />);
}

export default Component;
