import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7smeqbeh.css';
import '../../css/v/va27ux4ej.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y7smeqbeh"/><path class="va27ux4ej"/><path class="tsepx-fqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chat-operational"} {...others} />);
}

export default Component;
