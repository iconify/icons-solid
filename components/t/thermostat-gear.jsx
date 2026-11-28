import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c42l-0b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c42l-0b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:thermostat-gear"} {...others} />);
}

export default Component;
